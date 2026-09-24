const filterButtons = document.querySelectorAll(".filter-btn");
const programItems = document.querySelectorAll(".program-item");

filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    filterButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const selectedFilter = button.getAttribute("data-filter");

    programItems.forEach(function(item) {
      const programCategory = item.getAttribute("data-category");

      if (selectedFilter === "all" || selectedFilter === programCategory) {
        item.classList.remove("hidden-program");
      } else {
        item.classList.add("hidden-program");
      }
    });
  });
});