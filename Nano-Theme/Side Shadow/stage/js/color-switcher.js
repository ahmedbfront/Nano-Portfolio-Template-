/*================
  Dark Mode 
================*/
$(".dark-mode").on("click", function () {
  $("body").toggleClass("dark");
  $(".dark-mode i").toggleClass("active");
});

/*================
  Colors Switch 
================*/
$(".btn-switcher").on("click", function () {
  $(".style-switcher").toggleClass("show-switcher");
});

/*================
  Get Color In LocalStorage 
================*/
if (localStorage !== null) {
  document.documentElement.style.setProperty(
    "--main--color",
    localStorage.getItem("main-color")
  );
  document.documentElement.style.setProperty(
    "--bg-color",
    localStorage.getItem("bg-color")
  );
  document.documentElement.style.setProperty(
    "--bg-color-hover",
    localStorage.getItem("bghv-color")
  );
}

/*================
  Set Color In LocalStorage 
================*/
document.querySelectorAll(".colors-list li").forEach(function (li) {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );
    document.documentElement.style.setProperty(
      "--bg-color",
      e.target.dataset.bg
    );
    document.documentElement.style.setProperty(
      "--bg-color-hover",
      e.target.dataset.bghv
    );
    localStorage.setItem("main-color", e.target.dataset.color);
    localStorage.setItem("bg-color", e.target.dataset.bg);
    localStorage.setItem("bghv-color", e.target.dataset.bghv);
  });
});
