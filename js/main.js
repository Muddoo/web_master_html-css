const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function (e) {
     if(!e.target.matches('img') && !e.target.matches('a')) this.classList.toggle("collapsible_expanded");
  })
);