document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#ff6600";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "#fff";
    });
  });
});
