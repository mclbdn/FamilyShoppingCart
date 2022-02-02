const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

for (const input of inputs) {
  input.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
      e.target.nextElementSibling.style.marginTop = "-30px";
      e.target.nextElementSibling.style.transform = "scale(0.8)";
    } else {
      e.target.nextElementSibling.style.marginTop = "0px";
      e.target.nextElementSibling.style.transform = "scale(1)";
    }
  });
}
