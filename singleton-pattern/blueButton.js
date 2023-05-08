import Counter from "./counter";

const button = document.getElementById("blue");
button.addEventListener("click", () => {
  Counter.setCounterIncrement();
  console.log("Counter total: ", Counter.getCount());
});
