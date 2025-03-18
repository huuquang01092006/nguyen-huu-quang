let courses = [];
let students = [];

let choice;
do {
  choice = parseInt(
    prompt(
      `
Nhap lua chon:
1. Quản lý khóa học
2. Quản lý người dùng
3. Thoát
`
    )
  );
  switch (choice) {
    case 1:
      while (true) {
        let select = +prompt(`
1. Thêm khóa học
2. Tìm kiếm khóa học theo tên
3. Xóa khóa học
4. Thoát
`);
        switch (select) {
          case 1:
            addCourse();
            break;
          case 2:
            searchCourse();
            break;
          case 3:
            deleCourse();
            break;
          case 4:
            // thoát menu quản lý khóa học
            break;
          default:
            console.log("Lựa chọn không hợp lệ");
        }
        if (select === 4) break;
      }
      break;
    case 2:
      while (true) {
        let select = +prompt(`
1. Thêm người dùng mới
2. Đăng ký khóa học
3. Hủy đăng ký khóa học
4. Hiển thị danh sách khóa học của một người dùng
5. Thoát
`);
        switch (select) {
          case 1:
            addUser();
            break;
          case 2:
            registered();
            break;
          case 3:
            cancelCourse();
            break;
          case 4:
            displayCourse();
            break;
          case 5:
            break;
          default:
            console.log("Lựa chọn không hợp lệ");
        }
        if (select === 5) break;
      }
      break;
    case 3:
      console.log("Thoát chuong trinh");
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
      break;
  }
} while (choice != 3);

function addCourse() {
  let id = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
  let name = prompt("Nhập tên khóa học: ");
  let instructor = prompt("Nhập tên giao viên: ");
  courses.push({
    id: id,
    name: name,
    instructor: instructor,
    students: [],
  });
  console.log("Thêm khóa học thành công");
}

function searchCourse() {
  let nameCourse = prompt("Nhập tên khóa học cần tìm: ");
  let foundCourses = courses.filter((item) =>
    item.name.toLowerCase().includes(nameCourse.toLowerCase())
  );
  if (foundCourses.length > 0) {
    console.log("Các khóa học tìm được:", foundCourses);
  } else {
    console.log(`Không có khóa học ${nameCourse}`);
  }
}

function deleCourse() {
  let idCourse = +prompt("Nhập id khóa học cần xóa: ");
  courses = courses.filter((item) => item.id !== idCourse);
  students.forEach((item) => {
    item.registeredCourses = item.registeredCourses.filter(
      (courseId) => courseId !== idCourse
    );
  });
  console.log(`Đã xóa khóa học với id ${idCourse}`);
}

function addUser() {
  let id = students.length > 0 ? students[students.length - 1].id + 1 : 1;
  let nameUser = prompt("Mời nhập tên người dùng: ");
  students.push({
    id: id,
    name: nameUser,
    registeredCourses: [],
  });
  console.log("Thêm người dùng mới thành công");
}

function registered() {
  let idUser = +prompt("Nhập id người dùng muốn đăng ký: ");
  let idCourse = +prompt("Nhập id khóa học muốn đăng ký: ");
  let userIndex = students.findIndex((item) => item.id === idUser);
  let courseIndex = courses.findIndex((item) => item.id === idCourse);
  if (userIndex !== -1 && courseIndex !== -1) {
    if (!courses[courseIndex].students.includes(idUser)) {
      courses[courseIndex].students.push(idUser);
    }
    if (!students[userIndex].registeredCourses.includes(idCourse)) {
      students[userIndex].registeredCourses.push(idCourse);
    }
    console.log("Đăng ký khóa học thành công");
  } else {
    console.log("Không tồn tại id người dùng hoặc khóa học");
  }
}

function cancelCourse() {
  let idUser = +prompt("Nhập id người dùng muốn hủy đăng ký: ");
  let idCourse = +prompt("Nhập id khóa học muốn hủy đăng ký: ");
  let user = students.find((user) => user.id === idUser);
  let courseObj = courses.find((course) => course.id === idCourse);
  if (user && courseObj) {
    user.registeredCourses = user.registeredCourses.filter(
      (courseId) => courseId !== idCourse
    );
    courseObj.students = courseObj.students.filter((sid) => sid !== idUser);
    console.log("Hủy đăng ký khóa học thành công");
  } else {
    console.log("Không tồn tại người dùng hoặc khóa học");
  }
}
function displayCourse() {
  let idUser = +prompt("Nhập id người dùng muốn hiển thị: ");
  let user = students.find((user) => user.id === idUser);
  if (user) {
    let userCourses = user.registeredCourses.map((courseId) =>
      courses.find((course) => course.id === courseId)
    );
    console.log(`Danh sách khóa học của người dùng ${user.name}:`, userCourses);
  } else {
    console.log(`Không tồn tại người dùng với id ${idUser}`);
  }
}
