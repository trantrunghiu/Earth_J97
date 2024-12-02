document.addEventListener("click", function () {
  var audio = new Audio("../asset/music/music.mp3");
  audio.play();
  document.removeEventListener("click", arguments.callee);
});
// Hàm xử lý khi người dùng chọn option
function handleSelectChange(event) {
  const selectedValue = event.target.value;
  const imgElement = document.getElementById("image"); // Lấy phần tử hình ảnh
  const heartsContainer = document.getElementById("hearts-container"); // Lấy phần tử chứa trái tim

  // Chỉ hiển thị ảnh khi có lựa chọn
  if (
    selectedValue == "144p" ||
    selectedValue == "240p" ||
    selectedValue == "360p" ||
    selectedValue == "480p" ||
    selectedValue == "720p"
  ) {
    // Chọn ảnh phù hợp với chất lượng đã chọn
    imgElement.src = `../asset/image/${selectedValue}.png`; // Đặt tên ảnh tương ứng
    imgElement.style.display = "block"; // Hiển thị ảnh
    heartsContainer.innerHTML = ""; // Xóa trái tim khi chọn các chất lượng khác
  } else if (selectedValue == "1080p") {
    imgElement.src = `../asset/image/1080p.gif`; // Đặt tên ảnh tương ứng
    imgElement.style.display = "block"; // Hiển thị ảnh

    // Tạo hiệu ứng trái tim bay liên tục
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      // Thay emoji trái tim bằng file SVG từ thư mục assets/images
      heart.innerHTML = `<img src="../asset/image/heart.svg" width="40" height="40" />`;

      // Đặt vị trí ngẫu nhiên cho trái tim
      heart.style.position = "absolute";
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      heart.style.top = `${Math.random() * window.innerHeight}px`;

      heartsContainer.appendChild(heart);

      // Sau khi animation kết thúc, xóa trái tim khỏi DOM
      setTimeout(() => {
        heart.remove();
      }, 5000); // Thời gian tương ứng với duration của animation (5s)
    }, 50); // Tạo trái tim mỗi 50ms (nhiều trái tim liên tục)
  } else if (selectedValue == "none") {
    imgElement.style.display = "none"; // Ẩn ảnh nếu không có lựa chọn
    heartsContainer.innerHTML = ""; // Xóa trái tim khi không có lựa chọn
  }
}
