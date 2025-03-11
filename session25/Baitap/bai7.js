let str;
function toUpperCase(str) {
    str = str.toLowerCase();
    newStr = "";
    str= str.split(" ");
    for(let i= 0; i<str.length; i++){
        if(!str[i] == " "){
            newStr += str[i][0].toUpperCase() + str[i].slice(1) + " ";
        }
    }
    console.log(newStr);
}
str = prompt("Nhập chuỗi: ");
toUpperCase(str);