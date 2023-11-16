// написать декоратор который при присвоении
// проверяет присваемое значение функцией. 
// Если она вернет true, то будет присваевание,
// иначе не будет

function allowFunct() {
	return (
		target: Object, // наш обьект
		propertyKey: string | symbol // его идентификатор
	) => {
		let value: number; // свойстова, которое будем изменять
		const setter = (newValue: number) => newValue  > 0? value = newValue: {}; // функция для изменения значение свойства
		const getter = function () {
			return value;
		}
		Object.defineProperty(target, propertyKey, {
			set: setter,
			get: getter
		});
	}
}

class User {
    @allowFunct()
    age: number = 30;
}

const person = new User();
console.log(person.age);

person.age = 0;
console.log(person.age);

person.age = 20;
console.log(person.age);

person.age = -1;
console.log(person.age);