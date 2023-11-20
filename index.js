document.addEventListener("DOMContentLoaded", () => {
  var hamburger = document.querySelector("#ham-icon");
  console.log(hamburger);
  hamburger.addEventListener("click", function () {
    console.log(hamburger);
    var ul = document.querySelector("nav");
    console.log(ul.style.left);
    if (ul.style.left == "" || ul.style.left == "-100%") {
      console.log("hi");
      ul.style.left = 0;
      hamburger.classList.remove("fa", "fa-bars");
      hamburger.classList.add("fa-solid", "fa-xmark");
    } else {
      console.log("hello");
      ul.style.left = "-100%";
      hamburger.classList.remove("fa-solid", "fa-xmark");
      hamburger.classList.add("fa", "fa-bars");
    }
  });
});