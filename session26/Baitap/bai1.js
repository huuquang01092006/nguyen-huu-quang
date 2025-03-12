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
    let result = numbers.filter((item, index)=>{
        return item >= 10;
    });
    console.log(`[${result}]`);
}
