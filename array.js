class MyArray{
  constructor() {
    this.data = {}
    this.length = 0
  }
  getData(index) {
    return this.data[index]
  }
  append(data) {
    this.data[this.length] = data
    this.length++
  }
  pop() {
    this.length--
    delete this.data[this.length]
  }
  delete(index) {
    const currLen = this.length
    for(let i=index; i<currLen; i++) {
      this.data[i] = this.data[i+1]
    }
    this.length--
    delete this.data[this.length]
  }
}

m = new MyArray()
m.append(21)
m.append(34)
m.append(52)
m.append(76)
console.log(m)
m.delete(1)
console.log(m)