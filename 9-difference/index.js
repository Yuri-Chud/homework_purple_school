"use strict";
/*\
функция, которая удалит все ключи из первого объекта,
которые есть во втором объекте.
*/
let a = { a: 5, b: '' };
let b = { a: 10, c: true };
function differenceInObj(AObj, BObj) {
    const keysA = Object.keys(AObj);
    const keysB = Object.keys(BObj);
    const diffKeys = keysA.filter(item => !keysB.includes(item));
    const resObject = diffKeys.reduce((o, k) => { o[k] = AObj[k]; return o; }, {});
    const resObjWithTypes = resObject; // (в этой строчке вроде смысла нету) получаем типизированный обьект,  только с теми типами из T1, которые есть в resTypes
    return resObjWithTypes;
}
let v0 = differenceInObj(a, b);
console.log(v0);
