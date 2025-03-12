let str = ["2025-03-10", "2024-12-25", "2023-07-01"];
if(Array.isArray(str)){
    if(str.length == 0){
        console.log(`Mảng không có phần tử nào`);
    }else{
        let newStr = str.map((item)=>{
           let day = item.split("-");
           let calendar = day[2] + "/" + day[1] + "/" + day[0];
            return calendar;
        })
        console.log([newStr]);
    }
}else{
    console.log(`Dữ liệu không hợp lệ`);
}
