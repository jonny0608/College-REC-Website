const filterButtons = document.querySelectorAll(".filter-btn");
const programItems = document.querySelectorAll(".program-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    programItems.forEach(item => {
      item.classList.toggle(
        "hidden-program",
        filter !== "all" && filter !== item.dataset.category
      );
    });
  });
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = bootstrap.Offcanvas.getInstance(
      document.getElementById("mobileMenu")
    );

    if (menu) menu.hide();
  });
});