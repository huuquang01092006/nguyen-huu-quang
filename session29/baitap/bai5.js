let listUser = [];
let choice;
do {
  choice = parseInt(
    prompt(
      `
        Nhap lua chon:
        1. Đăng ký người dùng mới.
        2. Người dùng nhập tên, email và mật khẩu để đăng ký.
        3. Thoát.
        `
    )
  );
  switch (choice) {
    case 1:
      Registration();
      break;
    case 2:
      login();
      break;
    case 3:
      console.log(`Thoat chuong trinh`);
      break;
    default:
      console.log(`lua chon khong hop le`);
      break;
  }
} while (choice != 3);
function Registration() {
  let name = prompt("Nhập tên: ");
  while (true) {
    let email = prompt("Nhập email: ").trim();
    if (email.includes(" ")) {
      console.log("Sai email, hãy nhập lại");
      continue;
    }
    if (
      !email.includes("@") ||
      (!email.endsWith(".com") && !email.endsWith(".vn"))
    ) {
      console.log("Email không hợp lệ");
      continue;
    }
    if (listUser.some((user) => user.email === email)) {
      console.log("Tài khoản đã tồn tại");
      return;
    }

    let password = prompt("Nhập mật khẩu: ");
    if (password.length < 6) {
      console.log("Mật khẩu phải có ít nhất 6 ký tự");
      continue;
    }
    let specialChars = "!@#$%^&*";
    let hasUppercase = [...password].some(
      (char) => char === char.toUpperCase() && isNaN(char)
    );
    let hasSpecialChar = [...password].some((char) =>
      specialChars.includes(char)
    );

    if (!hasUppercase || !hasSpecialChar) {
      console.log(
        "Mật khẩu phải chứa ít nhất một chữ cái viết hoa và một ký tự đặc biệt"
      );
      continue;
    }

    let user = { name, email, password };
    listUser.push(user);
    console.log("Đăng ký thành công");
    break;
  }
}
function login() {
  let emailLogin = prompt("Nhập email đăng nhập: ").trim();
  let passwordLogin = prompt("Nhập mật khẩu đăng nhập: ").trim();
  let user = listUser.find((item) => item.email === emailLogin);
  if (user) {
    if (user.password === passwordLogin) {
      console.log(`Đăng nhập thành công`);
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`Password: ${user.password}`);
    } else {
      console.log(`Mật khẩu không chính xác`);
    }
  } else {
    console.log(`Email không tồn tại`);
  }
}
