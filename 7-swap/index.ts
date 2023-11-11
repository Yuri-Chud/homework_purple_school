function swapKeysAndValues <T extends Record<string, number>> (obj: T) : Record<number, string> {
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