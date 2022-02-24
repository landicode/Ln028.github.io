//Bài 1: Tìm số lớn nhất trong mảng
function maxArr(arr) {
    let maxValue = arr.sort((a, b) => b - a)
    return maxValue[0]
}
console.log(maxArr([18, 3, 8, 39, 55, 45, 3, 2]));

//Bài 2: Tìm số nhỏ nhất trong mảng
function minArr(arr) {
    let minValue = arr.sort((a, b) => a - b)
    return minValue[0]
}
console.log(minArr([18, 3, 8, 39, 55, 45, 3, 2]));

//Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

function array(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] % 2)
    }
    return newArray
}
console.log(array([4, 2, 5.5, 6, 2, 7]));

//Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function string(str) {
    return str.repeat(10)
}
console.log(string("a"));


//Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

function strings(str) {
    return str.repeat(10).split('').join("-").toString()
}
console.log(strings("a"));



