const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("button clicked");
});

div.addEventListener("click", (e) => {
  console.log("div clicked");
});
