let select;
let arr = [];
do{
    console.log("================== MENU ===================");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
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
            let index = 0; 
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > max){
                    max = arr[i];
                    index = i;
                }
            }
            console.log(`Phần tử lớn nhất là ${max} và vị trí là ${index}`);
            break;
        case 4:
            let sum = 0;
            let averagePlus = 0;
            let count =0;
            for(let i = 0; i < arr.length; i++){
                if(arr[i] > 0){
                    sum += arr[i];
                    count++;
                }
            }
            (count == 0)
            ?console.log("Mảng không có số dương") 
            :averagePlus = sum / arr.length;
            console.log(`Tổng các số dương trong mảng là: ${sum}`);
            console.log(`Trung bình cộng các số dương trong mảng là: ${averagePlus}`);
            break;
        case 5:
            let reverse = arr.reverse();
            console.log(`Mảng sau khi đảo ngược: array = ${reverse}`);
            break;
        case 6:
            let check = true;
            for (let i = 0; i < arr.length/2; i++){
                if(arr[i] != arr[arr.length - (i + 1)]){
                    check = false;
                    break;
                }
            }
            if(check){
                console.log("Đây là mảng đối xứng");
            }else{
                console.log("Đây không phải là mảng đối xứng");
            }
            break;
    }
}while(select !== 7);