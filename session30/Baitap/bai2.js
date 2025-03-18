let cart = [];
let listBook = [];
let choice;

do {
  choice = parseInt(
    prompt(
      `
      Nhap lua chon:
      1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
      2. Thêm sách mới vào kho
      3. Tìm kiếm sách theo tên hoặc id.
      4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
      5. Sắp xếp sách theo giá.
      6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
      7. Hiển thị tổng số lượng sách trong kho.
      8. Thoát chương trình.
      `
    )
  );

  switch (choice) {
    case 1:
      displayBook();
      break;
    case 2:
      addBook();
      break;
    case 3:
      searchBook();
      break;
    case 4:
      buyBook();
      break;
    case 5:
      sortBook();
      break;
    case 6:
      pay();
      break;
    case 7:
      totalBook();
      break;
    case 8:
      console.log(`Thoat chuong trinh`);
      break;
    default:
      console.log(`Lua chon khong hop le`);
  }
} while (choice != 8);

function displayBook() {
  let category = prompt("Nhap the loai sach: ");
  let result = listBook.filter((item) => item.category === category);
  if (result.length > 0) {
    console.log(result);
  } else {
    console.log(`Khong co sach the loai "${category}"`);
  }
}

function addBook() {
  let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds());
  let name = prompt("Nhap ten sach: ");
  let price = parseFloat(prompt("Nhap gia tien: "));
  let quantity = parseInt(prompt("Nhap so luong: "));
  let category = prompt("Nhap the loai: ");
  listBook.push({ id, name, price, quantity, category });
  console.log(`Them sach thanh cong`);
}

function searchBook() {
  let nameId = prompt("Nhap ten hoac id sach can tim: ").toLowerCase();
  let result = listBook.find(
    (item) =>
      item.name.toLowerCase().includes(nameId) || item.id.toString() === nameId
  );
  if (result) {
    console.log(result);
  } else {
    console.log(`Khong co sach voi ten hoac id "${nameId}"`);
  }
}

function buyBook() {
  let idBook = parseInt(prompt("Nhap id sach muon mua: "));
  let indexBook = listBook.findIndex((item) => item.id === idBook);
  if (indexBook !== -1) {
    let quantity = parseInt(prompt("Nhap so luong sach muon mua: "));
    if (quantity > listBook[indexBook].quantity) {
      console.log(
        `So luong sach khong du, con lai ${listBook[indexBook].quantity}`
      );
    } else {
      listBook[indexBook].quantity -= quantity;
      let index = cart.findIndex((item) => item.id === idBook);
      if (index === -1) {
        cart.push({ ...listBook[indexBook], quantity });
      } else {
        cart[index].quantity += quantity;
      }
      console.log(`Them vao gio hang thanh cong`);
    }
  } else {
    console.log(`Khong co sach voi id "${idBook}"`);
  }
}

function sortBook() {
  let choice = parseInt(
    prompt(`
    1. Tang dan
    2. Giam dan
    `)
  );
  if (choice === 1) {
    listBook.sort((a, b) => a.price - b.price);
  } else if (choice === 2) {
    listBook.sort((a, b) => b.price - a.price);
  } else {
    console.log(`Lua chon khong hop le`);
  }
  console.log(`Danh sach sach da sap xep:`, listBook);
}

function pay() {
  let total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  console.log(`Tong tien trong gio hang: ${total}`);
}

function totalBook() {
  let total = listBook.reduce((acc, item) => acc + item.quantity, 0);
  console.log(`Tong so luong sach trong kho: ${total}`);
}
