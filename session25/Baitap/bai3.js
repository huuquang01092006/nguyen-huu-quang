function checkEven(arr) {
    if(Array.isArray(arr)){
        if(arr.length == 0){
            console.log(`Mảng không chứa phần tử`);
            return;
        }
        let flag =0;
        for(let i =0; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                flag++;
                console.log(arr[i]);
            }
        }
        if(flag == 0){
            console.log(`Mảng không có số chẵn`);
        }
        return;
    }
    console.log(`Dữ liệu không hợp lệ`);
}
checkEven([1,5,7,8]);