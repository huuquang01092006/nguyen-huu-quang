let listProduct = [];
let choice;
do {
  choice = parseInt(
    prompt(
      `
        Nhap lua chon:
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo id.
        4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5. Xóa sản phẩm theo id.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát.
        `
    )
  );
  switch (choice) {
    case 1:
      addProduct();
      break;
    case 2:
      displayProduct();
      break;
    case 3:
      displayIdProduct();
      break;
    case 4:
      updateProduct();
      break;
    case 5:
      deleProduct();
      break;
    case 6:
      filterProduct();
      break;
    case 7:
      console.log(`Thoat chuong trinh`);
      break;
    default:
      console.log(`lua chon khong hop le`);
      break;
  }
} while (choice != 7);
function addProduct() {
  let n = +prompt("moi ban nhap so luong san pham: ");
  for (let i = 0; i < n; i++) {
    let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds());
    let name = prompt(`Nhap ten san pham thu ${i + 1}`);
    let price = +prompt(`Nhap gia cua san pham: `);
    let category = prompt(`nhap danh muc san pham: `);
    let quantity = +prompt(`nhap so luong san pham: `);
    let product = {
      id: id,
      name: name,
      price: price,
      category: category,
      quantity: quantity,
    };
    listProduct.push(product);
  }
  console.log(`them doi tuong san pham thanh cong`);
}
function displayProduct() {
  console.log(listProduct);
}
function displayIdProduct() {
  let listId = listProduct.map((item) => {
    return item.id;
  });
  console.log(listId);
  let sreachId = prompt("Nhap id muon hien thi: ");
  let findId = listProduct.findIndex((item) => {
    return item.id == sreachId;
  });
  if (findId != -1) {
    console.log(listProduct[findId]);
  } else {
    console.log(`id khong ton tai`);
  }
}
function updateProduct() {
  let listId = listProduct.map((item) => {
    return item.id;
  });
  console.log(listId);
  let sreachId = prompt("Nhap id muon cap nhat: ");
  let findId = listProduct.find((item) => {
    return item.id == sreachId;
  });
  if (findId) {
    let select = prompt(
      "thong tin ban muon cap nhat(name, price,category,quantity): "
    );
    if (select === "name") {
      let UpdateName = prompt("nhap ten moi: ");
      findId.name = UpdateName;
      console.log(`cap nhat ten thanh cong`);
    } else if (select === "price") {
      let updatePrice = prompt("Nhap gia moi: ");
      findId.price = updatePrice;
      console.log(`cap nhat gia thanh cong`);
    } else if (select === "category") {
      let updateCategory = prompt("Nhap danh muc moi: ");
      findId.category = updateCategory;
      console.log(`cap nhat danh muc thanh cong`);
    } else if (select === "quantity") {
      let updateQuangtity = prompt("Nhap so luong moi: ");
      findId.category = updateQuangtity;
      console.log(`cap nhat so luong thanh cong`);
    } else {
      console.log(`thong tin cap nhat khong hop le`);
    }
  } else {
    console.log(`id khong ton tai`);
  }
}
function deleProduct() {
  let listId = listProduct.map((item) => {
    return item.id;
  });
  console.log(listId);
  let sreachId = prompt("Nhap id muon cap nhat: ");
  let findId = listProduct.findIndex((item) => {
    return item.id == sreachId;
  });
  if (findId != -1) {
    listProduct.splice(findId, 1);
    console.log(`xoa thanh cong`);
  } else {
    console.log(`id khong ton tai`);
  }
}
function filterProduct() {
  let min = +prompt("nhap gia nho nhat:");
  let max = +prompt("nhap gia lon nhat: ");
  let about = listProduct.filter((item) => {
    return min <= item.price && item.price <= max;
  });
  if (about.length > 0) {
    console.log(about);
  } else {
    console.log(`id khong ton tai`);
  }
}
