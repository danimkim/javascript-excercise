let width = window.innerWidth;

function handleWindowResize() {
  width = window.innerWidth;
  //console.log("브라우저너비: " + width);
  if (width < 600) {
    document.body.style.backgroundColor = "#1abc9c";
  } else if (width < 900) {
    document.body.style.backgroundColor = "#3498db";
  } else {
    document.body.style.backgroundColor = "#f39c12";
  }
}
window.addEventListener("resize", handleWindowResize);
 
