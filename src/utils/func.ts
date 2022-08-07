import { useEffect } from "react";

export const is = (value: unknown, type: string) => {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
};

export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, "Function");
}

/**
 * @description 判断数组长度
 * @param {Array | string} 传入判断的参数
 * @param {Number} 传入比较值
 */
export function getArgsLength<T>(value: T[], compare: number): boolean {
  return value.length === compare;
}

export function useMount(callback: () => void): void {
  useEffect(() => {
    callback();
  }, []);
}
