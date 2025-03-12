/* 
let products= [ [“mì tôm”, 5, 5000], [“bánh mì”, 12, 15000],
 [“bánh bao”, 5, 8000], [“mèn mén”, 30, 20000]]
let cart=[];
1. Xem danh sách sản phẩm có sẵn trong cửa hàng.
2. Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.
    Sản phẩm không có trong cửa hàng hiển thị thông báo.
    Sản phẩm có trong cửa hàng khi mua số lượng sẽ giảm đi một, khi số lượng về 0 thì thông báo sản phẩm đã hết.
    Sản phẩm khi mua đã có trong giỏ hàng thì tăng số lượng lên một
                VD giỏ hàng sau khi mua:  [[“mèn mén”, 4, 20000], [“bánh bao”, 3, 8000]]

3. Tính tổng tiền và hiển thị hóa đơn.
4. Thoát
*/
let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000],
["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart = [];

let choice;
do {
    choice = +prompt("mời nhập lựa chọn");
    switch (choice) {
        case 1:
                // hiển thị sản phẩm trong cửa hàng
                showProduct();
            break;
        case 2:
                // chọn sản phẩm để đi mua hàng
                addToCart();
            break;
        case 3:
                // in tiền và hiển thị hóa đơn
            pay();
            break;
        default:
            break;
    }
} while (choice != 4);
// tạo function hiển thị sản phẩm trong cửa hàng
function showProduct() {
    for (let i = 0; i < products.length; i++) {
        console.log(`sản phẩm thứ ${i+1} có tên: ${products[i][0]}_
             số lượng sản phẩm còn: ${products[i][1]} _ giá ${products[i][2]}`);
    }
}
// tạo function đi mua hàng
function addToCart(){
    // cho người dùng nhập tên sảm phẩm cần mua
    let productName= prompt("mời bạn nhập tên sản phẩm cần mua");
    let flag=-1;
    for (let i = 0; i < products.length; i++) {
            if(products[i][0]==productName){
                flag=i;
                break;
            }
    }
    if(flag==-1){
        console.log("sản phẩm không có trong cửa hàng");
    }else{
        // sản phẩm cần mua có trong cửa hàng
        // xem sản phẩm còn hàng để bán  hay không
        if(products[flag][1]==0){
            console.log("sản phẩm đã hết hàng");
        }else{
            // sản phẩm còn hàng
            products[flag][1]--;// giảm số lượng sản phẩm trong cửa hàng đi một
            // thêm sản phẩm vào giỏ hàng
            //  kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
            // nếu có rồi tăng số lượng, chưa có thì thêm vào giỏ hàng
            let index=-1;
            for (let i = 0; i < cart.length; i++) {
                if(cart[i][0]==productName){
                    index=i;
                    break;
                }
            }
            if(index==-1){
                // tức là sản phẩm chưa có trong giỏ hàng
                cart.push([productName,1,products[flag][2]]);
            }else{
                // sản phẩm đã có trong giỏ hàng
                cart[index][1]++;
            }
        }
    }
}
// tạo hàm thanh toán
function pay(){
    // console.log("cart",cart);
    // console.log("products",products);
    let sum=0;
    for (let i = 0; i < cart.length; i++) {
        sum+= cart[i][1]*cart[i][2];
    }
    console.log("tổng tiền mua phải trả",sum);
}