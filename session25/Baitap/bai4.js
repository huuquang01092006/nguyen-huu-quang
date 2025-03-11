function isAvg(a) {
    let check = true
    if(Number.isInteger(a) && a >= 0){
        for(let i =2; i <= Math.sqrt(a) ; i++){
            if(a % i === 0){
                check = false;
                console.log(`không phải số nguyên tố`);
                return;
            }
        }
        if(check){
            console.log(`là số nguyên tố`);
            return;
        }
    }
    console.log(`Dữ liệu không hợp lệ`);
}
isAvg(2);