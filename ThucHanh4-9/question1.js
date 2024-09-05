// Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
const numbers = [1, 2, 3, 4, 5];
// Option 1
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumArray(numbers));

// Option 2 
const sumArray2 = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray2(numbers));


