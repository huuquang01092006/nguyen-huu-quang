let input =0;
let num1 = 0;
let num2 = 0;
do{
    input = +prompt("Nhập lựa chọn: ");
    switch (input) {
        case 1:
            num1 = +prompt("Nhập số thứ nhất: ");
            num2 = +prompt("Nhập số thứ hai: ");
            console.log(sum(num1, num2));
            break;
        case 2:
            num1 = +prompt("Nhập số thứ nhất: ");
            num2 = +prompt("Nhập số thứ hai: ");
            console.log(difference(num1, num2));
            break;
        case 3:
            num1 = +prompt("Nhập số thứ nhất: ");
            num2 = +prompt("Nhập số thứ hai: ");
            console.log(product(num1, num2));
            break;
        case 4:
            num1 = +prompt("Nhập số thứ nhất: ");
            num2 = +prompt("Nhập số thứ hai: ");
            console.log(division(num1, num2));
            break;    
        case 5:
            console.log(`Thoát chương trình`);
            break;
        default:
            console.log(`Lựa chọn không hợp lệ`);
            break;
    }
}while(input != 5);
function sum(a, b) {
    return sum = a + b;
}
function difference(a,b) {
    return difference = a - b;
}
function product(a, b) {
    return product = a * b;
}
function division(a, b) {
    return division = a / b;
}