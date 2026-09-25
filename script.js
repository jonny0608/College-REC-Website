const filterButtons = document.querySelectorAll(".filter-btn");
const programItems = document.querySelectorAll(".program-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active")); // removes active class from all buttons on click (removes red color from program button)
    button.classList.add("active");// adds active class to the clicked button (adds red color to program button)

    const filter = button.dataset.filter; // grabs value from html of dataset filter 

    programItems.forEach(item => {
      item.classList.toggle(
        "hidden-program",
        filter !== "all" && filter !== item.dataset.category // adds hidden program to all of the program elements BESIDES the one that was clicked on
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