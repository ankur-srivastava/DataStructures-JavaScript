function reverse(s) {
  const arr = s.split('')
  console.log(arr)
  for(let i=arr.length; i>0; i--) {
    console.log(arr[i])
  }
}

reverse('Hi Jack')

const a = [67, 2, 3, 17]
a.sort(function(a, b) {
  return a-b;
})
console.log('a = ', a)