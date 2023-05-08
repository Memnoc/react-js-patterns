import Counter from "./counter";

const button = document.getElementById("red");
button.addEventListener("click", () => {
  Counter.setCounterDecrement();
  console.log("Counter total: ", Counter.getCount());
});
