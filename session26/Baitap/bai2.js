let str = ["apple", "banana", "cat", "elephant", "dog"];
if(Array.isArray(str)){
    if(str.length == 0){
        console.log(`Mảng không có phần tử nào`);
    }else{
        let newStr = str.filter((item)=>{
            return item.length > 5;
        })
        console.log([newStr]);
    }
}else{
    console.log(`Dữ liệu không hợp lệ`);
}