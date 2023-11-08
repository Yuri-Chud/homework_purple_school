function swapKeysAndValues <A extends string, B extends number> (obj: Record<string, number>) : Record<number, number>  {
    return Object.keys(obj).reduce((acc, currentKey) => {
        acc[obj[currentKey]] = currentKey;
        return acc;
      }, {});
}

const obj: Record<string, number> = {
    a: 1,
    b: 2
}
const result = swapKeysAndValues(obj);
console.log(result);