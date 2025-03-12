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
    const totalEven = array.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    const totalOdd = array.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    console.log(`Tổng các số chẵn: ${totalEven}`);
    console.log(`Tổng các số chẵn: ${totalOdd}`);
}
