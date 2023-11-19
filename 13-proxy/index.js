"use strict";
/*
написать Proxy для класса API, котоая будет отправлять запросы на
 'https://dummyjson.com/products/1'если id продукта < 10, иначе
 вернуть ошибку
 */
class DummyAPI {
    getDummyJSON(id) {
        const result = fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => console.log(json));
        return result;
    }
}
class DummyAccessProxy {
    constructor(api) {
        this.api = api;
    }
    getJSONById(id) {
        if (id <= 10) {
            return this.api.getDummyJSON(id);
        }
        else {
            console.log('id должен быть не больше 10!');
            return undefined;
        }
    }
}
const proxy = new DummyAccessProxy(new DummyAPI());
console.log(proxy.getJSONById(1));
const proxy2 = new DummyAccessProxy(new DummyAPI());
console.log(proxy2.getJSONById(20));
