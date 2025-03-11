function sum(a, b) {
    if(Number.isInteger(a) && Number.isInteger(b)){
        let sum = a + b;
        console.log(`Tổng của hai số là: ${sum}`);
        return;
    }
    console.log(`Dữ liệu không hợp lệ`);
}
sum(7.9, 5);