let str = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
if(Array.isArray(str)){
    if(str.length == 0){
        console.log(`Mảng không có phần tử nào`);
    }else{
        let newStr = str.filter((item)=>{
            return item.includes("@") && !item.includes(" ");
        })
        console.log([newStr]);
    }
}else{
    console.log(`Dữ liệu không hợp lệ`);
}
