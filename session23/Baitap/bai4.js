let arr = [];
let flag = 0;
let input = +prompt("Nhập số lượng phần tử trong mảng: ");
for(let i = 0; i < input; i++){
    let index = +prompt(`Nhập phần tử thứ ${i+1}`);
    arr.push(index);
    if (!Number.isNaN(arr[i])){
        flag++;
        console.log(arr[i]);
    }
}
if(flag == 0){
    console.log(`Không có kí tự số`);
}