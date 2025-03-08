let arr = [];
let flag = 0;
let sum = 0;
let input = +prompt("Nhập số lượng phần tử trong mảng: ");
if(input > 0){
    for(let i = 0; i < input; i++){
        let index = +prompt(`Nhập phần tử thứ ${i+1}`);
        arr.push(index);
        if (!Number.isNaN(arr[i])){
            flag++;
            sum += arr[i];
        }
    }
    if(flag == 0){
        console.log(`Không có kí tự số`);
    }else{
        console.log(sum);
    }
}else if(input == 0){
    console.log(`Mảng không có phần tử`);
}else{
    console.log(`Số lượng phần tử không được âm`); 
}