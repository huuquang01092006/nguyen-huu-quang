let select;
let arr = [];
do{
    console.log("================== MENU ===================");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó");
    console.log("5. Tính trung bình cộng các phần tử của một hàng cụ thể");
    console.log("6. Đảo ngược các hàng trong mảng");
    console.log("7. Thoát");
    console.log("============================================");
    select = parseInt(prompt("Lựa chọn của bạn: "));
    switch(select){
        case 1:
            arr = [];
            let cols = +prompt("Nhập số cột trong mảng: ");
            let rows = +prompt("Nhập số lượng phần tử mỗi hàng: ");
            if (cols > 0 && rows > 0) {
                for (let i = 0; i < cols; i++) {
                    arr[i] = [];
                    for (let j = 0; j < rows; j++) {
                        arr[i][j] = +prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
                    }
                }
                console.log("Mảng hai chiều:", arr);
            } else if (cols === 0 || rows === 0) {
                console.log("Mảng không có phần tử");
            } else {
                console.log("Số lượng phần tử không hợp lệ");
            }
            break;
        case 2:
            for (let i = 0; i < arr.length; i++) {
                let row = "";
                for (let j = 0; j < arr[i].length; j++) {
                    row += arr[i][j] + " ";
                }
                console.log(row.trim()); 
            }
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                } 
            }
            console.log(`Tổng các số trong mảng là: ${sum}`);
            break;
        case 4:
            let max = 0;
            let row = 0;
            let col = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if(arr[i][j] > max){
                        max = arr[i][j];
                        col = i;
                        row = j;
                    }
                } 
            }
            console.log(`Số lớn nhất là ${max}, vị trí array[${col}][${row}]`);
            break;
        case 5:
            let input = +prompt("Nhập số hàng cần tính (bắt đầu từ 0): ");
            let sumNum = 0; 
            if (input >= 0 && input < arr.length) {
                for (let j = 0; j < arr[input].length; j++) {
                    sumNum += arr[input][j];
                }
                console.log(`Hàng ${input} có tổng là: ${sumNum}`);
            } else {
                console.log("Số hàng không hợp lệ!");
            }            
            break;
        case 6:
            for (let i = 0; i < arr.length; i++) {
                arr[i].reverse();
            }
            console.log(`Mảng sau khi đảo:`);
            for (let i = 0; i < arr.length; i++) {
                let row = "";
                for (let j = 0; j < arr[i].length; j++) {
                    row += arr[i][j] + " ";
                }
                console.log(row.trim()); 
            }
            break;
    }
}while(select !== 7);