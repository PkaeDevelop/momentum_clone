function changeBackgroundColor() {
  const widthPercent = (window.innerWidth / window.screen.width) * 100;
  const body = document.body;

  // 기존 배경색 클래스 제거
  body.classList.remove("skyblue-bg", "purple-bg", "yellow-bg");

  if (widthPercent <= 50) {
    body.classList.add("skyblue-bg");
  } else if (widthPercent <= 90) {
    body.classList.add("purple-bg");
  } else {
    body.classList.add("yellow-bg");
  }
}

// 창 크기 바뀔 때마다 실행
window.addEventListener("resize", changeBackgroundColor);

// 페이지 처음 열었을 때도 적용
changeBackgroundColor();
