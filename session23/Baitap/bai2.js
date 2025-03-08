let arr = [1,2,3,4,5,6];
let max = 0;
let index = 0;
let flag = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]> max){
        max = arr[i];
        index = i;
        flag++;
    }
}
if(flag > 0){
    console.log(`Số lớn nhất: ${max}`);
    console.log(`Vị trí: ${index}`);
}else{
    console.log(`Không có số lớn nhấtnhất`);
}
