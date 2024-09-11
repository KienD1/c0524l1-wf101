// let name = "TRUNG KIEN";
// console.log(name);

// let obj = {
//     name : "kien",
//     age : 20,
// }
// console.log(obj);
// 1 Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
const colors = ['red', 'blue', 'green'];
const [firstColor, secondColor, thirdColor] = colors
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

2
const person = {
    name: "KIEN",
    age: 30
}

const {name, age} = person

console.log(name);
console.log(age);

3
const arr1 = [1, 5, 3];
const arr2 = [4, 9, 6];

const NewArray = [...arr1,...arr2]

console.log(NewArray);

4
const arr = [1, 2, 3, 4];
const arr3 = [...arr]
console.log(arr3);
5
const arr4 = [1,2,3]
const newArr = [...arr,4]
console.log(newArr)
6
const obj1 = { a: 10, b: 20 };
const obj2 = { c: 31, d: 41 };
const mergedObj = {...obj1,...obj2}
console.log(mergedObj)
7
const person1 = {
    name: 'Trung Kien',
    age: 30,
    gender: 'male'
}
const person2 = {...person1, country: "Vietnam"}
console.log(person2);
8
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers);
9
const strings = ['apple', 'banana', 'kiwi', 'strawberry', 'grape'];
const lengthThreshold = 5;
const longStrings = strings.filter(string => string.length > lengthThreshold)
console.log(longStrings);
10
const obj = [
    { name: 'kien', age: 28 },
    { name: 'tu', age: 34 },
    { name: 'dao', age: 42 },
    { name: 'man', age: 22 }
];
const newobj = obj.filter(obj => obj.age > 30)
console.log(newobj);
11

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}


const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const primeNumbers = numbers1.filter(isPrime);

console.log(primeNumbers);
12
const containsNumber = str => /\d/.test(str);
const strings1 = ['cccc', 'bbbb', 'ssss', 'eeee', 'rrrr'];
const filteredStrings = strings1.filter(str => !containsNumber(str))
console.log(filteredStrings);
13
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator,currentValue) => accumulator + currentValue, 0)
console.log(sum)
14
const numbers3 = [1, 2, 3, 4, 5];
const product  = numbers3.reduce((accumulator,currentValue) => accumulator * currentValue, 1)
console.log(product)
15
const numbers4 = [1, 2, 3, 4, 5];
const maxNumber = numbers4.reduce((max, currentValue) => currentValue > max ? currentValue : max,  numbers[0])
console.log(maxNumber);
16
const array4 = ['AAAA', 'BBBB', 'CCCC', 'DDDD', 'EEEE', 'FFFF'];
const countOccurrences = array4.reduce((accumulator, currentValue) => {
    if(!accumulator[currentValue]) {
        accumulator[currentValue] = 1
    } else 
        accumulator[currentValue] ++
    return accumulator;
}, {})

console.log(countOccurrences);
17
const items = [
    { value: 11 },
    { value: 23 },
    { value: 34 },
    { value: 45 }
];

const total = items.reduce((accumulator, currentItem) =>  accumulator + currentItem.value, 0)
console.log(total);