function checkInteger(arr) {
    if(Array.isArray(arr)){
        if(arr.length == 0){
            console.log(`Mảng không chứa phần tử`);
            return;
        }
        let flag =0;
        for(let i =0; i < arr.length; i++){
            if(Number.isInteger(arr[i]) && arr[i] >= 0){
                flag++;
            }
        }
        if(flag == 0){
            console.log(`Mảng không có số nguyên dương`);
        }else{
            console.log(flag);
        }
        return;
    }
    console.log(`Dữ liệu không hợp lệ`);
}
checkInteger([1.2,-3,-6]);