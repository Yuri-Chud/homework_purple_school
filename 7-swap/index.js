"use strict";
function swapKeysAndValues(obj) {
    return Object.keys(obj).reduce((acc, currentKey) => {
        acc[obj[currentKey]] = currentKey;
        return acc;
    }, {});
}
const obj = {
    a: 1,
    b: 2
};
const result = swapKeysAndValues(obj);
console.log(result);
