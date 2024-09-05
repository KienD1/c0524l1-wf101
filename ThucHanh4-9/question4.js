// Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
const numbers = [1, 5, 10, 15, 20];
// Option 1
const maxInArray = arr => {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
};
const maxValue = maxInArray(numbers);

console.log(maxValue); 

// Option 2
const maxInArray2 = arr => Math.max(...arr);
const maxValue2 = maxInArray(numbers);

console.log(maxValue2); 