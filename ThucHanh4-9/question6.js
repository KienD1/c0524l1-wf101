// 6. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
const numbers = [1, 2, 3, 4, 5];
const squareArray = arr => arr.map(num => num * num);
const squaredNumbers = squareArray(numbers);

console.log(squaredNumbers); 
