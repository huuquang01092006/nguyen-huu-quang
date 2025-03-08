let arr = [1,22,33,44,22,12,2,4,54,7];
for (let i = 0; i < arr.length; i++){
    let flag;
    if(arr[i] >= 10){
        flag++;
        console.log(arr[i]);
    }
    if(flag==0){
        console.log(`Mảng không có số nào lớn hơn 10`);
    }
}