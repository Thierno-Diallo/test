window.onload = ( ) => {
    const elts = document.querySelectorAll(".accordion-element");

    const firstActive = document.querySelector(".accordion .active");

    let section = firstActive.children[1].querySelector("P");

    let sectionHeight =section.offsetheight + 20;

    firstActive.children[1].style.height = sectionHeight +"px";