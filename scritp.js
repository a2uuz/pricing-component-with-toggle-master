const toggle = document.getElementById("switch");
const price = document.getElementById("basic");
const price2 = document.getElementById("pro");
const price3 = document.getElementById("master");

toggle.addEventListener("click", () => {
  price.textContent = price.textContent === "$199.99" ? "$19.99" : "$199.99";
  price2.textContent = price2.textContent === "$249.99" ? "$24.99" : "$249.99";
  price3.textContent = price3.textContent === "$399.99" ? "$39.99" : "$399.99";
});
