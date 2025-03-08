let arr = [];
let flag = 0;
let input = +prompt("Nhập số lượng phần tử trong mảng: ");
if(input != 0 && input > 0){
    for(let i = 0; i < input; i++){
        let index = +prompt(`Nhập phần tử thứ ${i+1}`);
        arr.push(index);
    }
    console.log(arr);
    for(let i = 0; i<arr.length;i++){
        if(Number.isInteger(arr[i]) && arr[i] < 0){
            flag++;
        }
    }
    console.log(flag);
}else if(input == 0){
    console.log(`Mảng không có phần tử`);
}else{
    console.log(`Số lượng phần tử không hợp lệ`); 
}