/*
написать Proxy для класса API, которая будет отправлять запросы на 
 'https://dummyjson.com/products/1'если id продукта < 10, иначе 
 вернуть ошибку
 */

class DummyAPI implements Record <string, any> {
	getDummyJSON(id: number): Promise<void | Record <string, any>> {
    const result : Promise<void | Record <string, any>> = fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(json => console.log(json));
		return result;
	}
}

class DummyAccessProxy implements Record <string, any> {
	constructor(private api: DummyAPI) { }

	getJSONById(id: number): Record <string, any> | undefined {
		if (id <= 10) {
			return this.api.getDummyJSON(id)
		}
		else{
		console.log('id должен быть не больше 10!');
		return undefined;
		}
	}
}

const proxy = new DummyAccessProxy(new DummyAPI());
console.log(proxy.getJSONById(1));

const proxy2 = new DummyAccessProxy(new DummyAPI());
console.log(proxy2.getJSONById(20));