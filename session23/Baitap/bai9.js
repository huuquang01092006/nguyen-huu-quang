let select;
let arr = [];
do{
    console.log("================== MENU ===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
    console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
    console.log("7. Thêm một phần từ vào vị trí chỉ định");
    console.log("8. Thoát");
    console.log("============================================");
    select = parseInt(prompt("Lựa chọn của bạn: "));
    switch(select){
        case 1:
            arr =[];
            let input = +prompt("Nhập số lượng phần tử trong mảng: ");
            if(input != 0 && input > 0){
                for(let i = 0; i < input; i++){
                    let index = +prompt(`Nhập phần tử thứ ${i+1}`);
                    arr.push(index);
                }
            }else if(input == 0){
                console.log(`Mảng không có phần tử`);
            }else{
                console.log(`Số lượng phần tử không hợp lệ`); 
            }
            break;
        case 2:
            console.log(`Array = ${arr}`);
            break;
        case 3:
            let sumEven = 0;
            console.log(`Các phần tử chẵn là: `);
            for(let i = 0; i < arr.length; i++){
                if(arr[i] % 2 == 0){
                    console.log(arr[i]);
                    sumEven += arr[i];
                }
            }
            console.log(`Tổng các phần tử chẵn là: ${sumEven}`);
            break;
        case 4:
            let max = 0;
            let min = arr[0];
            for(let i = 0; i < arr.length; i++){
                if(arr[i]>max){
                    max = arr[i];
                }else if(arr[i] < min){
                    min = arr[i];
                }
            }
            console.log(`Số lớn nhất là ${max}`);
            console.log(`Số nhỏ nhất là ${min}`);
            break;
        case 5:
            let sum = 0;
            console.log(`Các phần tử là số nguyên tố: `);
            for (let i = 0; i < arr.length; i++) {
                let check = true;
                if (arr[i] < 2) {
                    check = false;
                } else {
                    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                        if (arr[i] % j === 0) {
                            check = false;
                            break;
                        }
                    }
                }
                if (check) {
                    sum += arr[i];
                    console.log(arr[i]);
                }
            }
            console.log(`Tổng các số nguyên tố là ${sum}`);
            break;
        case 6:
            let flag = 0;
            let value = +prompt("Nhập vào một số: ");
            for(let i = 0; i < arr.length; i++){
                if(arr[i] == value){
                    flag++;
                }
            }
            console.log(`Trong mảng có ${flag} phần tử ${value}`);
            break;
        case 7:
            let update = +prompt("Nhập vị trí muốn thêm: ");
            if(update < 0 || update > arr.length || Number.isNaN(update)){
                console.log(`Vị trí không hợp lệ`);
            }else{
                let value = +prompt("Nhập giá trị muốn thêm: ");
                if(Number.isNaN(update)){
                    console.log(`Giá trị không hợp lệ`);
                }else{
                    arr.splice(update -1 ,0,value);
                }
            }
            break;
    }
}while(select !== 8);