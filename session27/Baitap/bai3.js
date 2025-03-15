function areaFigue(choice) {
  switch (choice) {
    case 1: //tính diện tính hình tròn
      {
        let r = +prompt("Nhập bán kính hình tròn");
        let result = (22 / 7) * r * r;
        return result;
      }
      break;
    case 2: //tính chu vi hình tròn
      {
        let r = +prompt("Nhập bán kính hình tròn");
        let result = 2 * (22 / 7) * r;
        return result;
      }
      break;
    case 3: //tính diện tích hình chữ nhật
      {
        let a = +prompt("NHập a");
        let b = +prompt("Nhập b");
        let result = a * b;
        return result;
      }
      break;
    case 4: //tính chu vi hình chữu nhật
      {
        let a = +prompt("NHập a");
        let b = +prompt("Nhập b");
        let result = (a + b) * 2;
        return result;
      }
      break;
    case 5: //thoát
      console.log("Leave program!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
      break;
  }
}
let choice = +prompt("Nhập lựa chọn");
console.log(areaFigue(choice));
