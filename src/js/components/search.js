let search = document.querySelector(".search");
let searchIcon = document.querySelector(".search__icon");
let searchInput = document.querySelector(".search__input");
let searchClose = document.querySelector(".search__close");
let searchDelete = document.querySelector(".search__delete");

searchIcon.addEventListener("click", () => {
  search.classList.add("search-open");
  searchInput.focus();
});

searchClose.addEventListener("click", () => {
  search.classList.remove("search-open");
  //clear search field on close
  searchInput.value = "";
});

searchDelete.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
});
