class MyHashTable{
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for(let i=0; i<key.length; i++) {
      hash = (hash+key.charCodeAt(i)+i)%this.data.length;
    }
    return hash;
  }
  put(key, value) {
    this.data[this._hash] = value;
  }
  get(key) {
    return this.data[this._hash];
  }
}

const myTable = new MyHashTable(10);
myTable.put(2, 'anks')
console.log(myTable.get(2))