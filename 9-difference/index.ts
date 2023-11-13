/*\
функция, которая удалит все ключи из первого объекта,
которые есть во втором объекте.
*/ 

interface IA {
    a: number;
    b: string;
}


interface IB {
    a: number;
    c: boolean;
}


let a: IA = { a: 5, b: ''};
let b: IB = { a: 10, c: true};

interface IDifference {
    b: string;
}

function differenceInObj <T1 extends {}, T2 extends {} >(AObj:T1, BObj:T2) {
    const keysA = Object.keys(AObj);
    const keysB = Object.keys(BObj);
    const diffKeys = keysA.filter(item => !keysB.includes(item));
    const resObject = diffKeys.reduce((o,k) => {o[k] = AObj[k]; return o},
        {});
    type resTypes = Pick<T1, keyof typeof resObject>; // типы полученного обьекта
    const resObjWithTypes: resTypes = resObject // (в этой строчке вроде смысла нету) получаем типизированный обьект,  только с теми типами из T1, которые есть в resTypes
    return resObjWithTypes;
    }

let v0 = differenceInObj(a, b);
console.log(v0);