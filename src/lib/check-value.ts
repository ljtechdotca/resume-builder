export function checkValue(defaultValue: string, value: string | null) {
  return value ? value : defaultValue;
}
