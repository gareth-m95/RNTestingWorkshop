import { helperFunction } from './helper';

export function mainFunction(value: number) {
  const result = helperFunction(value + 5);
  return result + 10;
}
