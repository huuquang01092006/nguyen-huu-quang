function checkMax(num) {
    let str = num.toString().split('');
    str.sort((a, b) => b - a);
    let largestNumber = parseInt(str.join(''), 10);
    return largestNumber;
}
let numb = +prompt("Nhập số nguyên: ")
console.log(checkMax(numb)); 