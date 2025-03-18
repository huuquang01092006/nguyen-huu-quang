// Khởi tạo danh sách điện thoại và giỏ hàng
let phones = [
  { id: 1, name: "iPhone 17", price: 1000, quantity: 10, company: "Apple" },
  { id: 2, name: "Galaxy S26", price: 900, quantity: 5, company: "Samsung" },
  { id: 3, name: "Redmi 15", price: 300, quantity: 8, company: "Xiaomi" },
];
let cart = [];

// Hiển thị danh sách điện thoại theo hãng
function showPhonesByCompany(company) {
  console.log(`Danh sách điện thoại của hãng ${company}:`);
  phones
    .filter((phone) => phone.company.toLowerCase() === company.toLowerCase())
    .forEach((phone) => console.log(phone));
}

// Thêm điện thoại mới vào cửa hàng
function addNewPhone(id, name, price, quantity, company) {
  phones.push({ id, name, price, quantity, company });
  console.log(`${name} đã được thêm vào cửa hàng.`);
}

// Tìm kiếm điện thoại theo tên hoặc id
function searchPhone(query) {
  const results = phones.filter(
    (phone) =>
      phone.name.toLowerCase().includes(query.toLowerCase()) ||
      phone.id === Number(query)
  );
  console.log("Kết quả tìm kiếm:", results);
}

// Mua điện thoại
function buyPhone(id, quantity) {
  const phone = phones.find((p) => p.id === id);
  if (phone && phone.quantity >= quantity) {
    phone.quantity -= quantity;
    const cartItem = cart.find((c) => c.id === id);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({
        id: phone.id,
        name: phone.name,
        price: phone.price,
        quantity,
      });
    }
    console.log(`Đã thêm ${quantity} chiếc ${phone.name} vào giỏ hàng.`);
  } else {
    console.log("Không đủ số lượng hoặc điện thoại không tồn tại.");
  }
}

// Thanh toán giỏ hàng
function checkout() {
  if (cart.length === 0) {
    console.log("Giỏ hàng trống.");
  } else {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log(`Thanh toán thành công. Tổng tiền: ${total}.`);
    cart = [];
  }
}

// Sắp xếp điện thoại theo giá
function sortPhonesByPrice(order = "asc") {
  phones.sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );
  console.log("Danh sách điện thoại sau khi sắp xếp:", phones);
}

// Hiển thị tổng số tiền của các điện thoại trong kho
function showTotalStockValue() {
  const totalValue = phones.reduce(
    (sum, phone) => sum + phone.price * phone.quantity,
    0
  );
  console.log(`Tổng giá trị các điện thoại trong kho: ${totalValue}`);
}

// Hiển thị tổng số lượng điện thoại theo từng hãng
function showTotalByCompany() {
  const companySummary = phones.reduce((acc, phone) => {
    acc[phone.company] = (acc[phone.company] || 0) + phone.quantity;
    return acc;
  }, {});
  console.log("Tổng số lượng điện thoại theo hãng:", companySummary);
}

// Thoát chương trình
function exitProgram() {
  console.log("Thoát chương trình. Cảm ơn bạn!");
}

// Giao diện chương trình
function managePhoneStore() {
  let isRunning = true;
  while (isRunning) {
    console.log("\nQUẢN LÝ CỬA HÀNG ĐIỆN THOẠI");
    console.log("1. Hiển thị điện thoại theo hãng");
    console.log("2. Thêm điện thoại mới vào cửa hàng");
    console.log("3. Tìm kiếm điện thoại theo tên hoặc id");
    console.log("4. Mua điện thoại");
    console.log("5. Thanh toán giỏ hàng");
    console.log("6. Sắp xếp điện thoại theo giá");
    console.log("7. Hiển thị tổng giá trị điện thoại trong kho");
    console.log("8. Hiển thị tổng số lượng điện thoại theo hãng");
    console.log("9. Thoát chương trình");

    const choice = Number(prompt("Nhập lựa chọn của bạn: "));
    switch (choice) {
      case 1:
        const company = prompt("Nhập tên hãng: ");
        showPhonesByCompany(company);
        break;
      case 2:
        const id = Number(prompt("Nhập mã điện thoại: "));
        const name = prompt("Nhập tên điện thoại: ");
        const price = Number(prompt("Nhập giá tiền: "));
        const quantity = Number(prompt("Nhập số lượng: "));
        const newCompany = prompt("Nhập tên hãng: ");
        addNewPhone(id, name, price, quantity, newCompany);
        break;
      case 3:
        const query = prompt("Nhập tên hoặc id điện thoại: ");
        searchPhone(query);
        break;
      case 4:
        const buyId = Number(prompt("Nhập id điện thoại cần mua: "));
        const buyQuantity = Number(prompt("Nhập số lượng cần mua: "));
        buyPhone(buyId, buyQuantity);
        break;
      case 5:
        checkout();
        break;
      case 6:
        const order = prompt(
          "Nhập 'asc' để sắp xếp tăng dần, 'desc' để giảm dần: "
        );
        sortPhonesByPrice(order);
        break;
      case 7:
        showTotalStockValue();
        break;
      case 8:
        showTotalByCompany();
        break;
      case 9:
        exitProgram();
        isRunning = false;
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng thử lại!");
    }
  }
}
managePhoneStore();
