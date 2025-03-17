let listJob = [];
let choice;

do {
  choice = parseInt(
    prompt(
      `
        Nhập lựa chọn:
        1. Thêm công việc mới.
        2. Hiển thị tất cả các công việc.
        3. Cập nhật trạng thái công việc theo id.
        4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
        5. Sắp xếp các công việc theo trạng thái công việc.
        6. Thoát.
      `
    )
  );
  switch (choice) {
    case 1:
      addJob();
      break;
    case 2:
      displayJob();
      break;
    case 3:
      updateJob();
      break;
    case 4:
      filterJob();
      break;
    case 5:
      sortJob();
      break;
    case 6:
      console.log(`Thoát chương trình.`);
      break;
    default:
      console.log(`Lựa chọn không hợp lệ.`);
      break;
  }
} while (choice != 6);

function addJob() {
  let id;
  do {
    id = Math.floor(Math.random() * 1000000);
  } while (listJob.some((item) => item.id === id));

  let name = prompt("Nhập tên công việc: ");
  let describe = prompt("Nhập mô tả công việc: ");
  let timeStart = prompt("Nhập thời gian bắt đầu: ");
  let condition = true;

  let job = {
    name,
    id,
    describe,
    timeStart,
    condition,
  };

  listJob.push(job);
  console.log(`Thêm công việc thành công!`);
}

function displayJob() {
  if (listJob.length === 0) {
    console.log("Danh sách công việc trống.");
  } else {
    console.log("Danh sách công việc:");
    console.table(listJob);
  }
}

function updateJob() {
  let listId = listJob.map((item) => item.id);
  console.log("Danh sách ID công việc:", listId);

  let searchId = parseInt(prompt("Nhập ID muốn cập nhật: "));
  let jobToUpdate = listJob.find((item) => item.id === searchId);

  if (jobToUpdate) {
    let updateCondition = prompt(
      "Cập nhật trạng thái (true/false): "
    ).toLowerCase();

    if (updateCondition === "true" || updateCondition === "false") {
      jobToUpdate.condition = updateCondition === "true";
      console.log("Cập nhật trạng thái thành công!");
    } else {
      console.log(
        "Trạng thái không hợp lệ. Vui lòng nhập 'true' hoặc 'false'."
      );
    }
  } else {
    console.log(`Không tìm thấy công việc có ID: ${searchId}`);
  }
}

function filterJob() {
  let select = prompt(
    "Bạn muốn lọc theo trạng thái nào? (true/false): "
  ).toLowerCase();

  if (select === "true" || select === "false") {
    let filteredJobs = listJob.filter(
      (item) => item.condition === (select === "true")
    );

    if (filteredJobs.length > 0) {
      console.log("Danh sách công việc lọc theo trạng thái:");
      console.table(filteredJobs);
    } else {
      console.log(`Không có công việc nào có trạng thái: ${select}`);
    }
  } else {
    console.log("Trạng thái không hợp lệ.");
  }
}
function sortJob() {
  let sortedJobs = [...listJob].sort((a, b) => b.condition - a.condition);
  console.log("Danh sách công việc sau khi sắp xếp:");
  console.table(sortedJobs);
}
