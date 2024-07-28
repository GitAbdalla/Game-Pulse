document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".custom-cursor");
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
function shows() {
  let show = document.getElementById("dis");
  show.style.display = show.style.display === "none" ? "block" : "none";
}
