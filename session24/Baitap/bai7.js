let str = "";
let choice;
do {
    choice = parseInt(prompt("Nhập lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            str = prompt("Nhập vào một chuỗi:");
            break;
        case 2:
            console.log(`Chuỗi hiện tại: "${str}"`);
            break;
        case 3:
            str = str.trim();
            console.log(`Chuỗi sau khi loại bỏ khoảng trắng: "${str}"`);
            break;
        case 4:
            str = str.split("").reverse().join("");
            console.log(`Chuỗi sau khi đảo ngược: "${str}"`);
            break;
        case 5:
            let words = str.trim().split(/\s+/);
            let wordCount = str.length === 0 ? 0 : words.length;
            console.log(`Số lượng từ trong chuỗi: ${wordCount}`);
            break;
        case 6:
            let charToFind = prompt("Nhập ký tự cần tìm:");
            if (!str.includes(charToFind)) {
                console.log(`Không tìm thấy ký tự '${charToFind}' trong chuỗi.`);
                break;
            }
            let charToReplace = prompt(`Nhập ký tự thay thế cho '${charToFind}':`);
            str = str.split(charToFind).join(charToReplace);
            console.log(`Chuỗi sau khi thay thế: "${str}"`);
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
