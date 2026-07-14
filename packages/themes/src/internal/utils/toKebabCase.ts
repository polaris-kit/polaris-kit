export function toKebabCase(str: string) {
  return str.replaceAll(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
