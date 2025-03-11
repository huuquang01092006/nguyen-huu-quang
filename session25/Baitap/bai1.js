// Xây dựng hàm nhận vào một tham số là một mảng cho trước. Hàm thực hiện tìm giá trị nhỏ nhất trong mảng và trả về giá trị đó.
function checkMin(arr) {
    if(Array.isArray(arr)){
        if(arr.length == 0){
            console.log(`Mảng không chứa phần tử`);
            return;
        }
        let min = arr[0];
        for(let i =0; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        console.log(`Phần tử nhỏ nhất trong mẳng là ${min}`);
        return;
    }   
    console.log(`Giá trị không hợp lệ`);
}
checkMin([]);