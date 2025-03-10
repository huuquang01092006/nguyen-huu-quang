let str = "";
let choice;
do {
    choice = parseInt(prompt("Nhập lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            str = prompt("Nhập vào một chuỗi:");
            break;
        case 2:
            console.log(`Chuỗi hiện tại: ${str}`);
            break;
        case 3:
            console.log(`Độ dài của chuỗi: ${str.length}`);
            break;
        case 4:
            let charToCount = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === charToCount) {
                    count++;
                }
            }
            console.log(`Số lần xuất hiện của '${charToCount}' trong chuỗi là: ${count}`);
            break;
        case 5:
            let reversed = "";
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            if(str === reversed){
                console.log(`Chuỗi là đối xứng`);
            }else{
                console.log(`Chuỗi không đối xứng`);
            }
            break;
        case 6:
            let words = str.split(" ");
            let newStr = "";
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > 0) {
                    newStr += words[i][0].toUpperCase() + words[i].slice(1) + " ";
                }
            }
            console.log(`Chuỗi sau khi chuyển đổi: ${newStr.trim()}`);
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
