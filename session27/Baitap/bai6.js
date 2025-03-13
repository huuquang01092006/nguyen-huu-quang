let numbArr = [];
let lengthArr = +prompt("Nhập só lượng phần tứ");
for (let i = 0; i < lengthArr; i++) {
    numbArr[i] = +prompt("Phần tử: " + [i + 1]);
}
checkAdditive(numbArr);
function checkAdditive(array) {
    let n = array[1] - array[0];
    for(let i = 1; i< array.length; i++){
        if(array[i] != array[i -1] + n){
            console.log(`FALSE`);
            return;
        }
    }
    console.log(`TRUE`);
}