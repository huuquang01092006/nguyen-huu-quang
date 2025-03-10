let select;
let arr = [];
do{
    console.log("================== MENU ===================");
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
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
            let even = [];
            let odd = [];
            for(let i = 0;  i < arr.length; i++){
                if(arr[i] % 2 == 0){
                    even.push(arr[i]);
                }else{
                    odd.push(arr[i]);
                }
            }
            console.log(`Các số chẵn là ${even}`);
            console.log(`Các số lẻ là ${odd}`);
            break;
        case 4:
            let sum = 0;
            let averagePlus = 0;
            for(let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
            averagePlus = sum / arr.length;
            console.log(`Trung bình cộng các phần tử là: ${averagePlus}`);
            break;
        case 5:
            let dele = +prompt("Nhập vị trí phần tử muốn xóa: ");
            if(dele < 0 || dele > arr.length || Number.isNaN(Dele)){
                console.log(`Vị trí không hợp lệ`);
            }else{
                arr.splice(dele -1 ,1);
            }
            break;
        case 6:
            let max1st= 0;
            let max2th = 0;
            for(let i = 0; i <arr.length;i++){
                if(arr[i] > max1st){
                    max2th = max1st;
                    max1st = arr[i];
                }else if(arr[i] > max2th && arr[i] != max1st){
                    max2th = arr[i];
                }
            }
            console.log(max2th);
            break;
    }
}while(select !== 7);