// 8. Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const getPropertyArray = (arr, property) => arr.map(obj => obj[property]);
const names = getPropertyArray(users, "name");
const ages = getPropertyArray(users, "age");

console.log(names); 
console.log(ages);  
