// 9. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
const evenOddArray = arr => arr.map(num => (num % 2 === 0 ? "even" : "odd"));
const numbers = [1, 2, 3, 4, 5];
const evenOdd = evenOddArray(numbers);

console.log(evenOdd); 
