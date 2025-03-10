let select;
let arr = [];
do{
    console.log("================== MENU ===================");
    console.log("1. Nhập mảng 2 chiều");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử trong mảng");
    console.log("4. Tính tổng đường chéo chính");
    console.log("5. Tính tổng đường chéo phụ");
    console.log("6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột");
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
            let mainCross = 0;
            for (let i = 0; i < arr.length; i++) {
                mainCross += arr[i][i]; 
            }
            console.log("Tổng đường chéo chính:", mainCross);
            break;
        case 5:
            let subCross = 0;
            for (let i = 0; i < arr.length; i++) {
                subCross += arr[i][arr.length - 1 - i]; 
            }
            console.log("Tổng đường chéo phụ:", subCross);           
            break;
        case 6:
            let choice;
            do {
                console.log("1. Tính trung bình cộng của hàng");
                console.log("2. Tính trung bình cộng của cột");
                console.log("3. Thoát");
                choice = parseInt(prompt("Lựa chọn của bạn: "));
                switch (choice) {
                    case 1: {
                        let input = parseInt(prompt("Nhập số hàng cần tính (bắt đầu từ 0): "));
                        if (input >= 0 && input < rows) {
                            let sumNum = 0;
                            for (let j = 0; j < arr[input].length; j++) {
                                sumNum += arr[input][j];
                            }
                            let avg = sumNum / arr[input].length;
                            console.log(`Trung bình cộng của hàng ${input} là: ${avg}`);
                        } else {
                            console.log("Số hàng không hợp lệ!");
                        }
                        break;
                    }
                    case 2: 
                        let num = parseInt(prompt("Nhập số cột cần tính (bắt đầu từ 0): "));
                        if (num >= 0 && num < cols) {
                            let sumNumb = 0;
                            for (let j = 0; j < rows; j++) {
                                sumNumb += arr[j][num];
                            }
                            let avg = sumNumb / rows;
                            console.log(`Trung bình cộng của cột ${num} là: ${avg}`);
                        } else {
                            console.log("Số cột không hợp lệ!");
                        }
                        break;
                    default:
                        console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
                }
            } while (choice !== 3);
    }
}while(select !== 7);