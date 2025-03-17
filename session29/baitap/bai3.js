let menu = [];
function addDish(category, name, price, description) {
  if (!menu[category]) {
    menu[category] = [];
  }
  menu[category].push({ name, price, description });
  console.log(`Món "${name}" đã được thêm vào danh mục "${category}".`);
}

function removeDish(category, name) {
  if (!menu[category]) {
    console.log(`Danh mục "${category}" không tồn tại.`);
    return;
  }
  menu[category] = menu[category].filter((dish) => dish.name !== name);
  console.log(`Món "${name}" đã được xóa khỏi danh mục "${category}".`);
}
function updateDish(category, name, newName, newPrice, newDescription) {
  if (!menu[category]) {
    console.log(`Danh mục "${category}" không tồn tại.`);
    return;
  }
  let dish = menu[category].find((dish) => dish.name === name);
  if (!dish) {
    console.log(`Món "${name}" không tồn tại trong danh mục "${category}".`);
    return;
  }
  dish.name = newName || dish.name;
  dish.price = newPrice || dish.price;
  dish.description = newDescription || dish.description;
  console.log(`Món "${name}" đã được cập nhật.`);
}
function displayMenu() {
  console.log("Menu nhà hàng:");
  for (let category in menu) {
    console.log(`Danh mục: ${category}`);
    menu[category].forEach((dish) => {
      console.log(
        `- Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`
      );
    });
  }
}
function searchDish(name) {
  console.log(`Kết quả tìm kiếm cho "${name}":`);
  let found = false;
  for (let category in menu) {
    menu[category].forEach((dish) => {
      if (dish.name.toLowerCase().includes(name.toLowerCase())) {
        console.log(
          `- Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description} (Danh mục: ${category})`
        );
        found = true;
      }
    });
  }
  if (!found) console.log("Không tìm thấy món ăn nào.");
}
let choice;
do {
  choice = parseInt(
    prompt(
      `
        Nhap lua chon:
        1. Thêm món ăn vào danh mục.
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
        4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6. Thoát
        `
    )
  );
  switch (choice) {
    case 1:
      addDish();
      break;
    case 2:
      removeDish();
      break;
    case 3:
      updateDish();
      break;
    case 4:
      displayMenu();
      break;
    case 5:
      searchDish();
      break;
    case 6:
      console.log(`Thoat chuong trinh`);
      break;
    default:
      console.log(`lua chon khong hop le`);
      break;
  }
} while (choice != 6);
