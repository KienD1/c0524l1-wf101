// Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
const numbers = [1, 5, 10, 15, 20];
// Option 1
const filterGreaterThan = (arr, value) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            result.push(arr[i]);
        }
    }
    return result;
};
const result = filterGreaterThan(numbers, 10);

console.log(result); 


// Option 2
const filterGreaterThan2 = (arr, value) => arr.filter(num => num > value);
const result2 = filterGreaterThan(numbers, 10);

console.log(result2); 