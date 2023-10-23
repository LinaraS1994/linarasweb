const showMoreButton = document.getElementById("show-more");
  const hiddenProjects = document.querySelector(".hidden");

  showMoreButton.addEventListener("click", () => {
    hiddenProjects.classList.toggle("visible");
  });