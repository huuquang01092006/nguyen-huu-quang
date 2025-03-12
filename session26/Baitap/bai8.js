let numbers = [];
for(let i =0 ; i <10; i++){
    let input = +prompt("Mời bạn nhập: ");
    if(Number.isInteger(input)){
        numbers.push(input);
    }else{
        console.log(`Dữ liệu không hợp lệ`);
        break;
    }
}
if(numbers.length == 0){
    console.log(`Mảng không có phần tử nào`);
}else{
    let result = numbers
    .filter((item)=>{
        if (item <= 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(item); i++) {
            if (item % i === 0) {
                return false;
            }
            if (item % 2 == 0){
                return false;
            }
        }
        return true;
    });
    console.log(`[${result}]`);
}
