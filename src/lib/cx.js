/** Join truthy class values. Small enough not to warrant a dependency. */
export function cx(...values) {
  return values.filter(Boolean).join(' ');
}
