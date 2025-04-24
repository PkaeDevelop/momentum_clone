// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

// <⚠️ /이 부분은 삭제하지 마세요 ⚠️>
/*
✅ 마우스가 제목 위에 있을 때 제목의 텍스트가 변경되어야 합니다.
✅ 마우스가 제목에서 벗어났을 때 제목의 텍스트가 변경되어야 합니다.
✅ 창 크기가 변경되면 제목의 텍스트가 변경되어야 합니다.
✅ 마우스 오른쪽 클릭 시에도 제목의 텍스트가 변경되어야 합니다.
✅ 제목의 색상은 colors 배열에서 가져온 색 중 하나여야 합니다.
✅ .css 또는 .html 파일은 변경하지 마세요.
✅ 모든 이벤트 핸들러 함수는 반드시 "superEventHandler" 안에 있어야 합니다.
*/

/* 데이터 가져오는 영역 */
const h2 = document.querySelector("h2");

/* 함수 영역 */
const superEventHandler = {
  //마우스 올리면 동작
  handleMouseEnter: function () {
    h2.innerText = "The Mouse is here!!";
    h2.style.color = colors[0];
  },
  //마우스 떠나면 동작
  handleMouseleave: function () {
    h2.innerText = "Mouse is gone!!";
    h2.style.color = colors[1];
  },
  //사이즈 바뀌면 동작
  handleWindowResize: function () {
    h2.innerText = "You Just ReSize!!";
    h2.style.color = colors[2];
  },
  //마우스 우클릭시 동작
  handleRightClick: function () {
    console.log("바뀜!!", h2);
    h2.innerText = "That What a Right Click!!";
    h2.style.color = colors[3];
  },
};

/* 이벤트 영역 */
h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter); //마우스올리기
h2.addEventListener("mouseleave", superEventHandler.handleMouseleave); //마우스 떼기
window.addEventListener("resize", superEventHandler.handleWindowResize); //사이즈 바꾸기
document.addEventListener("contextmenu", superEventHandler.handleRightClick); //우클릭 이벤트
