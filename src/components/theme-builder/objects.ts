export type ObjectKey = string | symbol;

export type DeepPath = ObjectKey | Array<ObjectKey | number>;

function includesKey(within: ObjectKey[] | ((key: ObjectKey) => boolean), value: ObjectKey) {
  return typeof within === 'function' ? within(value) : within.includes(value);
}

/**
 * Exclude the keys from the object matched by the exclude callback.
 *
 * @param obj the object
 * @param exclude the callback to check the keys
 */
export function omit<T extends Record<ObjectKey, unknown>>(
  obj: T,
  exclude: (key: ObjectKey) => boolean
): Partial<T>;
/**
 * Exclude the givem keys from the object.
 *
 * @param obj the object
 * @param exclude the keys to exclude
 */
export function omit<T extends Record<ObjectKey, unknown>>(
  obj: T,
  exclude: ObjectKey[]
): Partial<T>;
export function omit<T extends Record<ObjectKey, unknown>>(
  obj: T,
  exclude: ObjectKey[] | ((key: ObjectKey) => boolean)
): Partial<T> {
  return Object.entries(obj)
    .filter(([key]) => !includesKey(exclude, key))
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});
}

/**
 * Pick the keys from the object matched by the given callback.
 *
 * @param obj the object
 * @param include the callback to check the keys
 */
export function pick<T extends Record<ObjectKey, unknown>>(
  obj: T,
  include: (key: ObjectKey) => boolean
): Partial<T>;
/**
 * Pick the given keys from the object.
 *
 * @param obj the object
 * @param include the keys to include
 */
export function pick<T extends Record<ObjectKey, unknown>>(
  obj: T,
  include: ObjectKey[]
): Partial<T>;
export function pick<T extends Record<ObjectKey, unknown>>(
  obj: T,
  include: ObjectKey[] | ((key: ObjectKey) => boolean)
): Partial<T> {
  return omit(obj, (key) => includesKey(include, key));
}

function toArray(path: ObjectKey | number): DeepPath {
  if (typeof path === 'number') return [path];
  if (typeof path === 'symbol') return [path];
  return path.split('.').flatMap((part) => {
    const prop = part.trim();
    if (prop.match(/^\d+$/)) return [parseInt(prop)];
    const match = prop.match(/(?<name>.*)(\[(?<index>\d+)\])/);
    return match?.groups
      ? match.groups.name
        ? [match.groups.name, parseInt(match.groups.index)]
        : [parseInt(match.groups.index)]
      : [prop];
  });
}

function toPath(path: DeepPath) {
  return [path]
    .flat()
    .flatMap((part) => toArray(part))
    .flat();
}

/**
 * Get value from the object by the given path.
 *
 * @param obj the object
 * @param path the path to the value
 * @param defaultValue default value to return if no value found
 */
export function deepGet<T = any>(obj: object, path: DeepPath, defaultValue?: T): T | undefined {
  const props = toPath(path);
  let target: object | undefined = obj;

  const getDefaultValue = () => (defaultValue !== undefined ? defaultValue : target) as T;

  while (props.length) {
    const prop = props.shift();
    if (target === null || target === undefined) return getDefaultValue();
    if (prop === undefined) continue;
    target = Reflect.get(target, prop);
  }
  return (target as T) ?? getDefaultValue();
}

/**
 * Set value to the object at given path.
 *
 * @param obj the object
 * @param path the path to the value
 * @param value the value to set
 */
export function deepSet<T extends object>(obj: T, path: DeepPath, value: unknown) {
  const props = toPath(path);
  const last = props.pop();

  let target: object = obj;
  while (props.length) {
    const prop = props.shift();
    let value = Reflect.get(target, prop!);
    if (value === null || value === undefined) {
      const next = props[0] ?? last;
      value = typeof next === 'number' ? [] : {};
      Reflect.set(target, prop!, value);
    }
    target = value;
  }

  if (target) Reflect.set(target, last!, value);

  return obj;
}
