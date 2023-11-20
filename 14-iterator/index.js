"use strict";
/*
Написать паттерн Iterator Для массива обьектов вида
{id: 1, date: "01-01-2023", title: "Test"}
с возможностью обхода обьекта как по дате, так и по Id
*/
class objList {
    constructor() {
        this.arrObjects = [];
    }
    sortByObjKey(by) {
        this.arrObjects = this.arrObjects.sort((a, b) => {
            if (a[by] > b[by]) {
                return 1;
            }
            else if (a[by] == b[by]) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
    addNewObj(task) {
        this.arrObjects.push(task);
    }
    getObjects() {
        return this.arrObjects;
    }
    count() {
        return this.arrObjects.length;
    }
    getIterator(by) {
        return new ObjectItearator(this, by);
    }
}
class ObjectItearator {
    constructor(objList, by) {
        this.position = 0;
        objList.sortByObjKey(by);
        this.objectList = objList;
    }
    current() {
        return this.objectList.getObjects()[this.position];
    }
    next() {
        this.position += 1;
        return this.objectList.getObjects()[this.position];
    }
    prev() {
        this.position -= 1;
        return this.objectList.getObjects()[this.position];
    }
    index() {
        return this.position;
    }
}
const objectList = new objList();
objectList.addNewObj({ id: 1, date: new Date("01-02-2023"), title: 'Test3' });
objectList.addNewObj({ id: 3, date: new Date("05-01-2020"), title: 'Test2' });
objectList.addNewObj({ id: 2, date: new Date("03-02-2024"), title: 'Test4' });
objectList.addNewObj({ id: 4, date: new Date("02-02-2018"), title: 'Test1' });
const iterator = objectList.getIterator('date');
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.index());
