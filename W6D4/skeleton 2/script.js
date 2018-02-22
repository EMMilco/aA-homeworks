document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  document.querySelectorAll("input [type='submit']").forEach((button) => {
    button.addEventListener("click", addToList);
  });

  const addToList = (e) => {
    const textBox = document.querySelectorAll("input [type='text']")[0];
    :
  // --- your code here!



  // adding new photos

  // --- your code here!



});
