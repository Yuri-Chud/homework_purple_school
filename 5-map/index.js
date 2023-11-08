"use strict";
// Map
// set delete get clear : key and value
// data store in buckets, hash
// if hash is same then buckets elements connected together
class MyMap {
    constructor(sizeCache) {
        this.data = new Array(sizeCache);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this._hash(key);
        const buckets = this.data[address];
        if (buckets) {
            for (let i = 0; i < buckets.length; i++) {
                if (buckets[i][0] === key) {
                    return buckets[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key) {
        const address = this._hash(key);
        const buckets = this.data[address];
        if (buckets) {
            for (let i = 0; i < buckets.length; i++) {
                if (buckets[i][0] === key) {
                    buckets.splice(i);
                }
            }
        }
    }
    clear() {
        this.data = [];
    }
}
const item1 = new MyMap(10);
item1.set('bar', 9);
item1.set('bar', 20);
item1.set('baz', 15);
console.log(item1.get('bar'));
item1.delete('bar');
item1.clear();
console.log(item1.get('bar'));
