let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } },
];
function calculateAverage(scores) {
  return (scores.math + scores.english + scores.literature) / 3;
}
function filterTopStudents(students) {
  return students.filter((student) => calculateAverage(student.scores) >= 8);
}
let topStudents = filterTopStudents(students);
console.log("Danh sách sinh viên có điểm trung bình >= 8:");
topStudents.forEach((student) => {
  console.log(`- ${student.name}`);
});
