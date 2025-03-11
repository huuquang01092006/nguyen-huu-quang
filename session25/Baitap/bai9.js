let users = [];
function checkAccount(user){
    let newStr;
    let newVn;
    let flag = false;
    let check = false;
    let alreadyExisted = true;
    if(user.includes("@")){
        flag = true;
    }else{
        console.log(`email không hợp lệ`);  
        return;   
    }
    newStr = user.slice(user.length-4);
    if(newStr.includes(".com")){
        check = true;
    }else{
        newVn = user.slice(user.length-3);
        if(newVn.includes(".vn")){
            check = true;
        }else{
            console.log(`email không hợp lệ`);    
            return; 
        }       
    }
    for(let i = 0; i < users.length; i++){
        if(users[i] == user){
            alreadyExisted = false;
            console.log(`Tài khoản đã tồn tại`);
            return;
        }
    }
    if(flag && check && alreadyExisted){
        users.push(user);
        console.log(`Đăng kí thành công`);
        return;
    }
}
let input = prompt("Nhập email: ").trim();
if(input.includes(" ")){
    console.log(`Sai email, hãy nhập lại`);
}else{
    checkAccount(input);
}
console.log(users);