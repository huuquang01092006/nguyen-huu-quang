let employees = []; // tạo mảng chứa danh sách nhân viên
while (true) {
  let choice = +prompt(
    `
                1.Thêm nhân viên mới.
                2.Xóa nhân viên theo id.
                    Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
                    Không tìm thấy nhân viên có id thì hiển thị thông báo.
                3. Cập nhật mức lương của nhân viên theo id
                4. Tìm kiếm nhân viên theo tên.
                5. Thoát 
            `
  );
  switch (choice) {
    case 1:
      // thêm nhân viên
      addNewEmployee();
      break;
    case 2:
      deleteEmployee();
      break;
    case 3:
      updateSalary();
      break;
    case 4:
      searchEmployeee();
      break;
    case 5:
      console.log(`Thoát chương trình`);
      break;
    default:
      break;
  }
  if (choice == 5) {
    break;
  }
}
// function thêm nhân viên
function addNewEmployee() {
  let name1 = prompt("nhập tên");
  let position = prompt("nhập vị trí");
  let salary = +prompt("mời nhập lương");
  let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds());
  // tạo đối tượng nhân viên
  let employee = {
    id: id,
    name: name1,
    salary: salary,
    position: position,
  };
  // thêm nhân viên vào trong mảng
  employees.push(employee);
  console.log("thêm nhân viên thành công", employees);
}
// hàm đi xóa nhân viên theo id
function deleteEmployee() {
  let id = +prompt("nhập id nhân viên muốn xóa");
  let findIndex = employees.findIndex((item) => item.id == id);
  if (findIndex != -1) {
    let confitmDelete = confirm("bạn có muốn xóa hay không?");
    if (confitmDelete) {
      employees.splice(findIndex, 1);
      console.log("xóa nhân viên thành công!");
    }
  } else {
    console.log("không tìm thấy nhân viên có id là: ", id);
  }
}
// hàm cập nhập lương nhân viên
function updateSalary() {
  let id = +prompt("Nhập ID nhân viên muốn cập nhật lương:");
  let findEmployee = employees.find((item) => item.id == id);
  if (findEmployee) {
    let newSalary = +prompt(
      `Nhập lương mới cho nhân viên: ${findEmployee.name}`
    );
    findEmployee.salary = newSalary;
    console.log("Cập nhật lương thành công!", findEmployee);
  } else {
    console.log("Không tìm thấy nhân viên có ID là:", id);
  }
}
// Hàm tìm kiếm nhân viên theo tên
function searchEmployeee() {
  let nameSearch = prompt("Nhập tên nhân viên muốn tìm:");
  let foundEmployees = employees.filter((item) =>
    item.name.toLowerCase().includes(nameSearch.toLowerCase())
  );
  if (foundEmployees.length > 0) {
    console.log("Danh sách nhân viên tìm thấy:", foundEmployees);
  } else {
    console.log("Không tìm thấy nhân viên nào có tên:", nameSearch);
  }
}
