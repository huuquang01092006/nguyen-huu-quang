function isStrongPassword(password){
    let normalW = false;
    let capW = false;
    let number = false;
    let flag = false;
    if(password.length >= 8 ){
        flag = true;
    }
    password = password.split("");
    for(let i =0; i < password.length; i++ ){
        let char = password[i];
        if(char === char.toUpperCase()){
            normalW = true;
        }
        if(char === char.toLowerCase()){
            capW = true;
        }
        if(!isNaN(char)){
            number = true;
        }
    }
    if(normalW && capW && number && flag){
        console.log("true");
    }else{
        console.log("false");
    }
}
let input = prompt("Nhập chuỗi: ");
isStrongPassword(input);