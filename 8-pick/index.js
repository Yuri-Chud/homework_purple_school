"use strict";
/* """
    написать ф/ю получения нужных свойств из обьекта
*/
// Вопрос: почему если написать const user: Record<string, any>, 
// то в аргумент propsArr (что представляет собой массив) функции pickObjectKeys(obj, propsArr) можно вписать любое свойство, 
// даже если его нет в свойствах обьекта, и TS не будет ругаться при этом?
const user = {
    name: 'Vasya',
    age: 8,
    skils: ['TS', 'JS']
};
function pickObjectKeys(obj, propsArr) {
    return propsArr.reduce((o, k1) => { o[k1] = obj[k1]; return o; }, {});
}
console.log(pickObjectKeys(user, ['name', 'skils']));
