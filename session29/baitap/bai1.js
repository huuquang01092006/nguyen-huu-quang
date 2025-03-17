let listContact = [];
let choice;
do {
  choice = parseInt(
    prompt(
      `
        Nhap lua chon:
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6. Thoát.
        `
    )
  );
  switch (choice) {
    case 1:
      addContact();
      break;
    case 2:
      displayContact();
      break;
    case 3:
      sreachContact();
      break;
    case 4:
      updateContact();
      break;
    case 5:
      deleContact();
      break;
    case 6:
      console.log(`Thoat chuong trinh`);
      break;
    default:
      console.log(`lua chon khong hop le`);
      break;
  }
} while (choice != 6);
function addContact() {
  let n = +prompt("nhap so luong doi tuong muon them: ");
  for (let i = 0; i < n; i++) {
    let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds());
    let name = prompt(`moi ban nhap ten doi tuong thu ${i + 1}:`);
    let email = prompt("moi ban nhap email: ");
    let phone = prompt("moi ban nhap so dien thoai: ");
    let contact = {
      id: id,
      name: name,
      email: email,
      phone: phone,
    };
    listContact.push(contact);
  }
  console.log(`them doi tuong thanh cong`);
}
function displayContact() {
  console.log(listContact);
}
function sreachContact() {
  let sreachPhone = prompt("moi ban nhap so dien thoai muon tim: ");
  let findPhone = listContact.filter((item) => {
    return item.phone == sreachPhone;
  });
  if (findPhone.length > 0) {
    console.log(findPhone);
  } else {
    console.log(`khong tim thay doi tuong co so dien thoai ${sreachPhone}`);
  }
}
function updateContact() {
  let listId = listContact.map((item) => {
    return item.id;
  });
  console.log(listId);
  let sreachId = +prompt("moi ban nhap id muon cap nhat: ");
  let update = listContact.find((item) => {
    return item.id == sreachId;
  });
  if (update) {
    let select = prompt("thong tin ban muon cap nhat(name, email, phone): ");
    if (select === "name") {
      let updateName = prompt("Moi ban nhap ten moi: ");
      update.name = updateName;
      console.log(`cap nhat ten thanh cong`);
    } else if (select === "email") {
      let updateEmail = prompt("moi ban nhap email moi: ");
      update.email = updateEmail;
      console.log(`cap nhat email thanh cong`);
    } else if (select === "phone") {
      let updatePhone = prompt("moi ban nhap so dien thoai moi: ");
      update.phone = updatePhone;
      console.log(`cap nhat so dien thoai thanh cong`);
    } else {
      console.log(`thong tin thay doi khong hop le`);
    }
  } else {
    console.log(`khong tim thay doi tuong co id ${sreachId}`);
  }
}
function deleContact() {
  let listId = listContact.map((item) => {
    return item.id;
  });
  console.log(listId);
  let sreachId = +prompt("moi ban nhap id muon cap nhat: ");
  let findIndex = listContact.findIndex((item) => item.id == sreachId);
  if (findIndex != -1) {
    let confitmDelete = confirm("bạn có muốn xóa hay không?");
    if (confitmDelete) {
      listContact.splice(findIndex, 1);
      console.log("xóa doi tuong thành công!");
    }
  } else {
    console.log("không tìm thấy doi tuong có id là: ", id);
  }
}
