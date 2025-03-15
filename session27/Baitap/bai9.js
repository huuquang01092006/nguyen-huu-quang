function sort(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b); 
    let evenIndex = 0; 
    return arr.map(num => {
        if (num % 2 === 0) {
            return evenNumbers[evenIndex++]; 
        }
        return num; 
    });
}
let numbArr = [];
let lengthArr = +prompt("Nhập só lượng phần tứ");
for (let i = 0; i < lengthArr; i++) {
    numbArr[i] = +prompt("Phần tử: " + [i + 1]);
}
console.log(sort(numbArr));