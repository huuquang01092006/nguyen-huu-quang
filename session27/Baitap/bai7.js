let numbArr = [];
let lengthArr = +prompt("Nhập só lượng phần tứ");
for (let i = 0; i < lengthArr; i++) {
    numbArr[i] = +prompt("Phần tử: " + [i + 1]);
}
checkAdditive(numbArr);
function checkAdditive(array) {
    for (let i = 1; i < array.length; i++) {
        let expected = array[i - 1] + 1;
        while (array[i] !== expected) {
            console.log("Số bị thiếu: " + expected);
            expected++;
        }
    }
}