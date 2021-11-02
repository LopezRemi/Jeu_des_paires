const cards = document.querySelectorAll('.card')


for (let card of cards) {
    card.addEventListener("click",function(){
        this.childNodes[1].classList.add("activate");
        let result  = this.getAttribute("data-att");   //recupère le data attribute
    });
}


function flip(){
    document.getElementsByClassName("card")
    
}
