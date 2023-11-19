/*\
функция, которая удалит все ключи из первого объекта,
которые есть во втором объекте.
*/ 

interface IA {
    a: number;
    b: string;
    e: string;
}


interface IB {

    c: boolean;
    b: string;
}


let aObj: IA = { a: 5, b: '', e: ''};
let bObj: IB = { c: true, b: ''};

interface IDifference {
    b: string;
}

function differenceInObj <T1 extends {}, T2 extends {} >(AObj:T1, BObj:T2) : Omit<T1,  keyof T1 &  keyof T2> {
    const keysA = Object.keys(AObj);
    const keysB = Object.keys(BObj);
    const diffKeys = keysA.filter(item => !keysB.includes(item));
    const resObject : any = diffKeys.reduce((o,k) => {o[k] = AObj[k]; return o}, {});
    return resObject
    }

let v0 = differenceInObj(aObj, bObj);
console.log(v0);