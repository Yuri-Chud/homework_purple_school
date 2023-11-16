"use strict";
// написать декоратор который при присвоении
// проверяет присваемое значение функцией. 
// Если она вернет true, то будет присваевание,
// иначе не будет
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function allowFunct() {
    return (target, // наш обьект
    propertyKey // его идентификатор
    ) => {
        let value; // свойстова, которое будем изменять
        const setter = (newValue) => newValue > 0 ? value = newValue : {}; // функция для изменения значение свойства
        const getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class User {
    constructor() {
        this.age = 30;
    }
}
__decorate([
    allowFunct(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
const person = new User();
console.log(person.age);
person.age = 0;
console.log(person.age);
person.age = 20;
console.log(person.age);
person.age = -1;
console.log(person.age);
