// 5. Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
const numbers = [1, 5, 10, 15, 20];
const avgArray = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;
const average = avgArray(numbers);

console.log(average); 
