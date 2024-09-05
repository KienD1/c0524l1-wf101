// 10. Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.
const uppercaseArray = arr => arr.map(word => word.toUpperCase());
const words = ["kien", "trung", "linh"];
const uppercaseWords = uppercaseArray(words);

console.log(uppercaseWords);
