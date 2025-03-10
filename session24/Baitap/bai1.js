let select;
let arr = [];
do{
    console.log("================== MENU ===================");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát");
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
        case 4:
            let sum = 0;
            for(let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
            console.log(`Tổng các phần tử là: ${sum}`);
            break;
        case 5:
            let numb = +prompt("Nhập một phần tử");
            let check = 0;
            for(let i = 0; i <arr.length;i++){
                if(arr[i] == numb){
                    check++;
                }
            } 
            console.log(`Phần tử ${numb} xuất hiện ${check} lần`);
            break;
        case 6:
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < arr.length -1;j++){
                    if(arr[j + 1] < arr[j]){
                        let temp = arr[j + 1];
                        arr[j + 1] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log(`Mảng sau khi đã sắp xếp: Array = ${arr}`);
            break;
    }
}while(select !== 7);