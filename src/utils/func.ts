export const is = (value: unknown, type: string) => {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
};

export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, "Function");
}
