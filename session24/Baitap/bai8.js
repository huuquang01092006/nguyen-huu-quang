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
            let word = str.toLowerCase().trim().split(/\s+/);
            let checked = [];
            for (let i = 0; i < word.length; i++) {
                if (checked.includes(word[i])) continue;
                let count = 1;
                for (let j = i + 1; j < word.length; j++) {
                    if (word[i] === word[j]) count++;
                }
                if (count > 1) {
                    console.log(`"${word[i]}": ${count} lần`);
                }
                checked.push(word[i]);
            }
            break;
        case 4: 
            let words = str.trim().split(/\s+/);
            if (words.length === 0) {
                console.log("Chuỗi không chứa từ hợp lệ.");
                break;
            }
            let minWord = words[0], maxWord = words[0];
            for (let word of words) {
                if (word.length < minWord.length) minWord = word;
                if (word.length > maxWord.length) maxWord = word;
            }
            console.log(`Từ ngắn nhất: "${minWord}"`);
            console.log(`Từ dài nhất: "${maxWord}"`);
            break;
        case 5: 
            break;
        case 6:
            str = str.trim().toLowerCase().split(/\s+/).join("_");
            console.log(`Chuỗi sau khi chuyển đổi: "${str}"`);
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
