// Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
const numbers = [1, 2, 3, 4, 5];

// Option 1
const squareArray = (arr) => {
    let squaredArr = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
};
console.log(squareArray(numbers)); 

// Option 2 
const squareArray2 = (arr) => arr.map(num => num * num);
console.log(squareArray(numbers)); 
