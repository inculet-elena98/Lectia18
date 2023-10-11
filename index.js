
// for (let i = 5; i--) {
//   console.log(i)
// }


// const arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }


// const arr = [1, 2, 3, 4, 5]
// const str = 'string'
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i])
// }


// const arr = [1, 2, 3, 4, 5]
// const arr1 = arr.map((item, index, array) => {
//   console.log(item + index);
//   let result = item + index * 2
//   console.log(result)
//   return item
// })
// console.log(arr1)


// const arr = [1, 2, 3, 4, 5]
// const arr1 = arr.map((item, index, array) => {
//   return (item: item, index)
// })
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = arr.map((item, index, array) => {
//   return { item: item + index, index }
// })
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = arr.filter((item, index, array) => {
//   return index < 2
// })
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = arr.indexOf('str2')
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = arr.findIndex((item) => {
//   return item === arr[2]
// })
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = arr.every((item) => {
//   return item.length > 5
// })
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str555555']
// const arr1 = arr.some((item) => {
//   return item.length > 6
// })
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = []
// arr.forEach((item) => {
//   arr1.push(item)
// })
// console.log(arr)
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = []
// arr.forEach((item) => {
//   const item1 = arr1.push(item)
//   console.log(item1)
// })
// console.log(arr)
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = []
// const arr2 = arr.map((item) => {

//   return arr1.push(item)
// })
// console.log(arr1, '1')
// console.log(arr2, '2')


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = []
// const arr2 = arr.slice(0, 2)
// console.log(arr, '1')
// console.log(arr2, '2')


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = []
// const sliceReturn = arr.slice(0, 2)
// const pushReturn = arr.push('str')
// console.log(arr, '1')
// console.log(sliceReturn, 'sliceReturn')
// console.log(pushReturn, 'pushReturn')


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const found = arr.find((item, index) => {
//   return item === 'str2';
// })
// console.log(found)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const arr1 = arr.concat('str', 'str2')
// console.log(arr1)


// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const obj = {
//   a: 'abc',
//   b: 'abc',
//   c: 'abc'
// }
// const obj1 = {
//   a: 'abc1',
//   b: 'abc2',
//   c: 'abc3'
// }
// const obj2 = { ...obj1 }
// const arr1 = [...arr, ...arr]
// console.log(arr1)
// console.log(obj2)



// const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
// const inPresent = arr.includes('str3')
// console.log(inPresent)



// const func = (arg1) => {
//   console.log(arg1)
// }
// func('item')


// const func = (function (arg1) {
//   console.log(arg1)
// }('item'))


// (function (arg1) {
//   console.log(arg1)
// }('item'))


// for (var i = 0; i < 4; i++) {
//   const button = document.createElement('button');
//   button.innerText = `Button ${i}`;
//   button.onclick = (function (arg1) {
//     return function () {
//       console.log(arg1);
//     }
//   }(i));
//   document.body.appendChild(button);
// }


// const func = (function () {
//   console.log('arg1')
// }())


// const func1 = (function () {
//   console.log('arg1')
// }())
// const func2 = (function () {
//   console.log('arg1')
// }())
// const func3 = (function () {
//   console.log('arg1')
// }())


// const counter = (function () {
//   let count = 0;
//   return function () {
//     return count++
//   }
// }())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())


// const counter = (function () {
//   let count = 0;
//   return function (num) {
//     count = num !== undefined ? num : count;
//     return count++
//   }
// }())
// console.log(counter())
// console.log(counter())
// console.log(counter(0))
// console.log(counter())
// console.log(counter())
// console.log(counter())


// const func = (arg) => {
//   console.log(arg)
// }
// func('arg')


// const func = (arg) => {
//   const i = 0
//   return i
// }
// const closurVariable = func()
// console.log(closurVariable)


// const closure = function () {
//   let x = 0;
//   return () => {
//     return x
//   }
// }
// const displayX = closure()
// console.log(displayX())


const closure = function () {
  let x = 0;
  function displayX() {
    return x
  }
  function changeX(arg) {
    x = arg
  }
  return [displayX, changeX]
}
const [displayX, changeX] = closure()
console.log(displayX())
changeX(3)
console.log(displayX())


