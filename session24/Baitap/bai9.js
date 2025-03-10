let str = ""; // Chuỗi ký tự chính
let leave = true;

while (leave) {
    let choice = +prompt(`
        === Menu ===
        1. Nhập chuỗi ký tự
        2. Hiển thị chuỗi ký tự
        3. Đếm số lượng các ký tự là chữ và số trong chuỗi
        4. Chuyển đổi ký tự viết hoa ↔ viết thường
        5. Trộn lẫn chuỗi gốc với chuỗi khác
        6. Tách chuỗi thành các từ và sắp xếp theo độ dài
        7. Thoát chương trình
        Nhập lựa chọn của bạn:
    `);
    switch (choice) {
        case 1: // Nhập chuỗi ký tự
            str = prompt("Nhập chuỗi ký tự:");
            alert("Đã nhập chuỗi thành công!");
            break;
        case 2: // Hiển thị chuỗi ký tự
            if (str === "") {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                alert("Chuỗi hiện tại: " + str);
            }
            break;

        case 3: // Đếm số lượng ký tự là chữ và số
            if (str === "") {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let letters = 0, numbers = 0;
                for (let char of str) {
                    if (/[a-zA-Z]/.test(char)) {
                        letters++;
                    } else if (/[0-9]/.test(char)) {
                        numbers++;
                    }
                }
                alert(`Số ký tự là chữ: ${letters}, Số ký tự là số: ${numbers}`);
            }
            break;

        case 4: // Chuyển đổi ký tự viết hoa ↔ viết thường
            if (str === "") {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let convertedStr = "";
                for (let char of str) {
                    if (char === char.toUpperCase()) {
                        convertedStr += char.toLowerCase();
                    } else {
                        convertedStr += char.toUpperCase();
                    }
                }
                alert("Chuỗi sau khi chuyển đổi: " + convertedStr);
            }
            break;

        case 5: // Trộn lẫn chuỗi gốc với chuỗi khác
            if (str === "") {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let str2 = prompt("Nhập chuỗi thứ 2:");
                let mixedStr = "";
                let maxLength = Math.max(str.length, str2.length);
                for (let i = 0; i < maxLength; i++) {
                    if (i < str.length) mixedStr += str[i];
                    if (i < str2.length) mixedStr += str2[i];
                }
                alert("Chuỗi sau khi trộn: " + mixedStr);
            }
            break;

        case 6: // Tách chuỗi thành các từ và sắp xếp theo độ dài
            if (str === "") {
                alert("Chuỗi hiện tại đang rỗng.");
            } else {
                let words = str.split(" ");
                words.sort((a, b) => a.length - b.length);
                alert("Các từ sau khi sắp xếp theo độ dài: " + words.join(", "));
            }
            break;

        case 7:
            alert("Thoát chương trình.");
            leave = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
    }
}