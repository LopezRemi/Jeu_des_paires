// const cards = document.querySelectorAll('.card')


// for (let card of cards) {
//     card.addEventListener("click",function(){
//         let result  = this.getAttribute("data-att");   //recupère le data attribute
//     });
// }

const cards = document.querySelectorAll('.cardBloc')

for (let card of cards) {
    card.addEventListener("click",function(){
        this.childNodes[1].classList.add("activate");
        console.log(this.childNodes[1])
    });
}




