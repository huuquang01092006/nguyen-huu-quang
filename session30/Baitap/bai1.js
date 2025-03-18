let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let cart = [];
let choice;
do {
  choice = parseInt(
    prompt(
      `
        Nhap lua chon:
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.
        `
    )
  );
  switch (choice) {
    case 1:
      displayProduct();
      break;
    case 2:
      choiceBuy();
      break;
    case 3:
      sortProduct();
      break;
    case 4:
      pay();
      break;
    case 5:
      console.log(`Thoat chuong trinh`);
      break;
    default:
      console.log(`lua chon khong hop le`);
      break;
  }
} while (choice != 5);
function displayProduct() {
  let choice = +prompt(
    `
        1. món ăn dân tộc Kinh
        2. món ăn dân tộc Mông
        `
  );
  if (choice == 1) {
    let result = products.filter(
      (item) => item.category == "món ăn dân tộc Kinh"
    );
    console.log(result);
  } else if (choice == 2) {
    let result = products.filter(
      (item) => item.category == "món ăn dân tộc Mông"
    );
    console.log(result);
  } else {
    console.log(`lua chon khong hop le`);
  }
}
function choiceBuy() {
  let productId = +prompt("nhap id san pham: ");
  let productIndex = products.findIndex((item) => item.id == productId);
  if (productIndex != -1) {
    let quantity = +prompt("nhap so luong san pham muon mua: ");
    if (quantity > products[productIndex].quantity) {
      console.log(
        `khong du san pham trong cua hang, con lai ${products[productIndex].quantity}`
      );
    } else {
      products[productIndex].quantity -= quantity;
      let cartIndex = cart.findIndex((item) => item.id == productId);
      if (cartIndex == -1) {
        cart.push({ ...products[productIndex], quantity: quantity });
        console.log(`Thêm sản phẩm thành công: ${cartcart}`);
      } else {
        cart[cartIndex].quantity += quantity;
        console.log(`Cập nhật số lượng sản phẩm: ${cart}`);
      }
    }
  } else {
    console.log(`khong ton tai san pham co id ${productId}`);
  }
}
function sortProduct() {
  let choice = +prompt(`
        nhap lua chon:
        1. tang dan
        2. giam dan 
        `);
  if (choice == 1) {
    products.sort((a, b) => a.price - b.price);
    console.log(products);
  } else if (choice == 2) {
    products.sort((a, b) => b.price - a.price);
    console.log(products);
  } else {
    console.log(`lua chon khong hop le `);
  }
}
function pay() {
  let sum = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  console.log(sum);
}
