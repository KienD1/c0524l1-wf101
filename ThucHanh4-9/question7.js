// 7. Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.

const strings = ["apple", "banana", "cherry", "date"];
const lengthArray = arr => arr.map(str => str.length);
const lengths = lengthArray(strings);

console.log(lengths); 
