// Getting elements

const accordionItem = document.querySelectorAll(".accordion-menu-item");

//Open accordion on click and changing styles of arrow and text

accordionItem.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    let accordionResponse;
    let arrowDown;
    let accordionTitle;

    console.log(e);

    if (e.target.classList.contains("accordion-item-title")) {
      accordionResponse = e.target.parentElement.nextElementSibling;
      accordionResponse.classList.toggle("open");
      arrowDown = e.target.nextElementSibling;
      arrowDown.classList.toggle("rotate");
      accordionTitle = e.target;
      accordionTitle.classList.toggle("active");
    }

    if (e.target.classList.contains("d-flex")) {
      accordionResponse = e.target.nextElementSibling;
      accordionResponse.classList.toggle("open");
      arrowDown = e.target.lastElementChild;
      arrowDown.classList.toggle("rotate");
      accordionTitle = e.target.firstElementChild;
      accordionTitle.classList.toggle("active");
    }

    if (e.target.classList.contains("arrow-down")) {
      accordionResponse = e.target.parentElement.nextElementSibling;
      accordionResponse.classList.toggle("open");
      arrowDown = e.target;
      arrowDown.classList.toggle("rotate");
      accordionTitle = e.target.previousElementSibling;
      accordionTitle.classList.toggle("active");
    }

    if (e.target.classList.contains("accordion-menu-item")) {
      accordionResponse = e.target.lastElementChild;
      accordionResponse.classList.toggle("open");
      arrowDown = e.target.firstElementChild.lastElementChild;
      arrowDown.classList.toggle("rotate");
      accordionTitle = e.target.firstElementChild.firstElementChild;
      accordionTitle.classList.toggle("active");
    }
  });
});
