const isArrayHasData = arr => Array.isArray(arr) && !!arr.length;

const isObjHasData = obj => Boolean(obj) && !!Object.keys(obj).length;

export { isArrayHasData, isObjHasData };
