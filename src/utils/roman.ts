export function romanToInt(roman: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0
  let prevValue = 0

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanMap[roman[i]]
    if (currentValue < prevValue) {
      result -= currentValue
    } else {
      result += currentValue
    }
    prevValue = currentValue
  }

  return result
}
