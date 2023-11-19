"use strict";
/*\
функция, которая удалит все ключи из первого объекта,
которые есть во втором объекте.
*/
let aObj = { a: 5, b: '', e: '' };
let bObj = { c: true, b: '' };
function differenceInObj(AObj, BObj) {
    const keysA = Object.keys(AObj);
    const keysB = Object.keys(BObj);
    const diffKeys = keysA.filter(item => !keysB.includes(item));
    const resObject = diffKeys.reduce((o, k) => { o[k] = AObj[k]; return o; }, {});
    return resObject;
}
let v0 = differenceInObj(aObj, bObj);
console.log(v0);
