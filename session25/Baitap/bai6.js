function checkStr(arr) {
    let flag = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - i - 1]) {
            flag = false;
        }
    }
    if (flag) {
        console.log("Là 1 chuỗi đối xứng");
    } else {
        console.log("Không phải chuỗi đối xứng");
    }
}
let str = prompt("Nhập chuỗi");
str.trim();
checkStr(str);