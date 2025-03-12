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
    console.log(numbers);
    let max = 0;
    let position = 0;
    numbers.filter((item, index)=>{
        if(item > max){
            max = item;
            position = index;
            return true;
        }
        return false;
    });
    console.log(`max: ${max}, position: ${position}`);
}
