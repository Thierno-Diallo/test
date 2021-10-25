window.onload = () => {
    const elts = document.querySelectorAll(".accordion-element");

    const firstActive = document.querySelector(".accordion .active");

    
    let section = firstActive.children[1].
    querySelector("p");
            //réccup hauteur de la section
    let sectionHeight = section.offsetHeight + 20;
    // déf hauteur
    firstActive.children[1].style.height  =
    sectionHeight+"px";

    // ouverture/fermeture d'element

    for(let elt of elts){
        elt.addEventListener("click", function(){
            //réccup element actif
        const active = document.querySelector(".accordion .active");
        const sectionHeight = this.offsetHeight + 50;

            // on rétire la class active
            if(this.classList.contains('active')){
                active.classList.remove("active");
                active.children[1].style.height = 0;
            }else{
                this.classList.add('active');
                this.children[1].style.height =
                sectionHeight+"px";
            }
            console.log(this);
        })
    }
    



}