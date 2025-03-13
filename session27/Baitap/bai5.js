let numbArr = [];
let lengthArr = +prompt("Nhập só lượng phần tứ");
for (let i = 0; i < lengthArr; i++) {
    numbArr[i] = +prompt("Phần tử: " + [i + 1]);
}
let n = +prompt("Số lượng phần tử con");
console.log(divideArr(numbArr, n));
function divideArr(array, n) {
    let subArraySize = Math.ceil(array.length / n);
    let result = [];
    for (let i = 0; i < array.length; i += subArraySize) {
        result.push(array.slice(i, i + subArraySize));
    }
    return result;
}
