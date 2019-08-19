// @flow

// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
export const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
