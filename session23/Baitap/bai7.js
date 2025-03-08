let arr = [];
let flag = 0;
let max = 0;
let max2th =0;
let input = +prompt("Nhập số lượng phần tử trong mảng: ");
if(input != 0 && input > 0){
    for(let i = 0; i < input; i++){
        let index = +prompt(`Nhập phần tử thứ ${i+1}`);
        arr.push(index);
    }
    for(let i = 0; i <arr.length;i++){
        if(arr[i] > max){
            max2th = max;
            max = arr[i];
        }else if(arr[i] > max2th && arr[i] != max){
            max2th = arr[i];
        }
    }
    console.log(max2th);
}else if(input == 0){
    console.log(`Mảng không có phần tử`);
}else{
    console.log(`Số lượng phần tử không hợp lệ`); 
}