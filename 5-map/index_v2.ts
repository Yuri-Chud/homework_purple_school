// // Map
// // set delete get clear : key and value
// // data store in buckets, hash
// // if hash is same then buckets elements connected together

// class MyMap {
//     hash: {} = {};

//     private _add_hash(key:string, value:any):void {
//         this.hash[key] = value;
//     }

//     set(key, value):void {
//         if ( this.get(key) !== value) {
//             this._add_hash(key, value);
//         } else {
//             console.log('сущность с таким ключ : значение уже существует');
//         }
//     }

//     get(key:string):any {
//         return this.hash[key];
//     }

//     delete(key):void  {
//         delete this.hash[key];
//     }

//     clear():void  {
//         this.hash = {};
//     }
// }

// const item1 = new MyMap();

// console.log('>>> set');
// console.log(item1.get('1'));
// item1.set('1', 'foo');
// console.log(item1.get('1'));

// item1.set('2', 'bar');
// console.log(item1.get('2'));

// item1.set('1', 'baz');
// console.log(item1.get('1'));

// item1.set('1', 'baz');

// console.log('>>> delete');
// item1.delete('1');
// item1.delete('1');
// console.log(item1.get('1'));

// console.log('>>> set again');
// item1.set('1', 'foo');
// console.log(item1.get('1'));

// console.log('>>> clear');
// item1.clear();
// console.log(item1.get('1'));
// console.log(item1.get('2'));
