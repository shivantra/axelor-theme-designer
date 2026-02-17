import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UNRELEASED_DIR = path.join(__dirname, 'unreleased');

const VALID_TYPES = new Set(['feature', 'change', 'deprecate', 'remove', 'fix', 'security']);

function validateChangelog(filePath) {
  const errors = [];

  let content;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    errors.push(`[${filePath}] Could not read file: ${err.message}`);
    return errors;
  }

  let json;
  try {
    json = JSON.parse(content);
  } catch (err) {
    errors.push(`[${filePath}] Invalid JSON: ${err.message}`);
    return errors;
  }

  const requiredFields = ['title', 'type', 'scope'];
  for (const field of requiredFields) {
    if (!(field in json)) {
      errors.push(`[${filePath}] Missing required field: '${field}'`);
    }
  }

  if ('type' in json && !VALID_TYPES.has(json.type)) {
    errors.push(
      `[${filePath}] Invalid 'type': '${json.type}' (must be one of ${Array.from(VALID_TYPES).join(', ')})`
    );
  }

  if ('scope' in json) {
    if (
      !Array.isArray(json.scope) ||
      json.scope.length === 0 ||
      !json.scope.every((s) => typeof s === 'string')
    ) {
      errors.push(`[${filePath}] 'scope' must be a non-empty array of strings`);
    }
  }

  if ('description' in json && typeof json.description !== 'string') {
    errors.push(`[${filePath}] 'description' must be a string if provided`);
  }

  return errors;
}

function main() {
  if (!fs.existsSync(UNRELEASED_DIR)) {
    console.error(`❌ Directory '${UNRELEASED_DIR}' not found.`);
    process.exit(1);
  }

  const files = fs.readdirSync(UNRELEASED_DIR).filter((file) => file.endsWith('.json'));
  let allErrors = [];

  files.forEach((file) => {
    const fullPath = path.join(UNRELEASED_DIR, file);
    const errors = validateChangelog(fullPath);
    allErrors = allErrors.concat(errors);
  });

  if (allErrors.length > 0) {
    console.error('❌ Validation failed with the following issues:\n');
    allErrors.forEach((err) => console.error(` - ${err}`));
    process.exit(1);
  } else {
    console.log('✅ All changelog entries are valid.');
  }
}

main();
