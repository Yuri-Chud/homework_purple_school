/* 
Написать паттерн Iterator Для массива обьектов вида
{id: 1, date: "01-01-2023", title: "Test"}
с возможностью обхода обьекта как по дате, так и по Id
*/


interface IObject {
  id: number,
  date: Date,
  title: string
}

class objList {
	private arrObjects: IObject[] = [];

	public sortByObjKey(by: string) {
		this.arrObjects = this.arrObjects.sort((a, b) => {
			if (a[by] > b[by]) {
				return 1;
			} else if (a[by] == b[by]) {
				return 0;
			} else {
				return -1;
			}
		})
	}

	public addNewObj(task: IObject) {
		this.arrObjects.push(task);
	}

	public getObjects() {
		return this.arrObjects;
	}

	public count() {
		return this.arrObjects.length;
	}

	public getIterator(by: string) {
		return new ObjectItearator(this,by);
	}
}

interface IIterator<T> {
	current(): T | undefined;
	next(): T | undefined;
	prev(): T | undefined;
	index(): number;
}


class ObjectItearator implements IIterator<IObject> {
	private position: number = 0;
	private objectList: objList;

	constructor(objList: objList, by: string) {
		objList.sortByObjKey(by);
		this.objectList = objList;
	}

	current(): IObject | undefined {
		return this.objectList.getObjects()[this.position];
	}
	next(): IObject | undefined {
		this.position += 1;
		return this.objectList.getObjects()[this.position];
	}
	prev(): IObject | undefined {
		this.position -= 1;
		return this.objectList.getObjects()[this.position];
	}
	index(): number {
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