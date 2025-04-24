const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseleave() {
  h1.innerText = "Mouse is gone!!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

h1.addEventListener("click", handleTitleClick);
//h1.onclick = handleTitleClick; //같은 표현

h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter; //같은 표현

h1.addEventListener("mouseleave", handleMouseleave);
//h1.onmouseleave = handleMouseleave; //같은 표현

window.addEventListener("resize", handleWindowResize);
