## Changelog entries

#### Overview

The `unreleased` folder contains all changelog entries that haven't been release yet.

At the release time, all unreleased entries are combined into final CHANGELOG.md file.

#### Changelog entry

Under `changelogs/unreleased`, create a new file of format `<ticket-number>.json`.

The file is expected to be a JSON file in the following format:

```json
{
  "title": "Add support for multi-language notifications",
  "type": "feature",
  "description": "Introduced a new notification service that supports multiple languages.",
  "scope": ["designer"]
}
```

The `title` describes the entry.

The `type` can be :

- **feature** for new features.
- **change** for changes in existing functionality.
- **deprecate** for soon-to-be removed features.
- **remove** for now removed features.
- **fix** for any bug fixes.
- **security** in case of vulnerabilities.

The `description` is optional and should provide detail description about the changes including
migration steps if any.

The `scope` should be an array listing the areas of the application affected by the change. Available scopes are:
- `designer` - Theme Designer features
- `ui` - UI Components
- `core` - Core functionality
- `build` - Build & Deploy processes
- `docs` - Documentation

#### Source

- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Gitlab: How we solved GitLab's CHANGELOG conflict crisis] (https://about.gitlab.com/2018/07/03/solving-gitlabs-changelog-conflict-crisis/)
