let listBook = [];
function addBook() {
  let n = +prompt("Số lượng sách muốn thêm: ");
  for (let i = 0; i < n; i++) {
    let title = prompt("Nhập tên sách: ");
    let author = prompt("Nhập tên tác giả: ");
    let year = prompt(`Nhập năm xuất bản: `);
    let price = +prompt("Nhập giá sách: ");
    let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds());
    let book = {
      title: title,
      author: author,
      year: year,
      price: price,
      id: id,
      isAvailable: true,
    };
    listBook.push(book);
  }
  console.log(`Thêm sách thành công`);
}
function displayBook() {
  console.log(listBook);
}
function sreachBook() {
  let nameBook = prompt("Nhập tên sách: ");
  let findBook = listBook.filter((item) => {
    return item.title.includes(nameBook);
  });
  if (findBook.length > 0) {
    console.log(findBook);
  } else {
    console.log(`Không tìm thấy sách.`);
  }
}
function updateIsAvailable() {
  let idBook = +prompt("Nhập id sách muốn cập nhật: ");
  let findBook = listBook.find((item) => item.id == idBook);
  if (findBook) {
    let update = prompt("Bạn muốn cập nhật thành? (true/false)");
    findBook.isAvailable = update === "true";
    console.log("Cập nhật thành công");
  }
}
function deleBook() {
  let id = +prompt("nhập id sáchsách muốn xóa");
  let findIndex = listBook.findIndex((item) => item.id == id);
  if (findIndex != -1) {
    let confitmDelete = confirm("bạn có muốn xóa hay không?");
    if (confitmDelete) {
      listBook.splice(findIndex, 1);
      console.log("xóa sách thành công!");
    }
  } else {
    console.log("không tìm thấy sáchsách có id là: ", id);
  }
}
function sortBook() {
  for (let i = 0; i < listBook.length - 1; i++) {
    for (let j = 0; j < listBook.length - 1 - i; j++) {
      if (listBook[j].price > listBook[j + 1].price) {
        let temp = listBook[j + 1];
        listBook[j + 1] = listBook[j];
        listBook[j] = temp;
      }
    }
  }
  console.log(`Danh sách sách đã sắp xếp ${listBook}`);
}
while (true) {
  let choice = +prompt(
    `
                1. Thêm sách mới.
                2. Hiển thị danh sách sách.
                3. Tìm kiếm sách theo tiêu đề.
                4. Cập nhật trạng thái mượn/trả sách theo id sách.
                5. Xóa sách theo id sách ra khỏi danh sách.
                6. Sắp xếp sách theo giá tăng dần.
                7. Thoát. 
            `
  );
  switch (choice) {
    case 1:
      addBook();
      break;
    case 2:
      displayBook();
      break;
    case 3:
      sreachBook();
      break;
    case 4:
      updateIsAvailable();
      break;
    case 5:
      deleBook();
      break;
    case 6:
      sortBook();
      break;
    case 7:
      console.log(`Thoát chương trình`);
      break;
    default:
      console.log(`Lựa chọn không hợp lệ`);
      break;
  }
  if (choice == 7) {
    break;
  }
}
