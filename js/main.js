
let clickCheck = 0;      //Variable utilisé pour savoir ou en est le nombre de clic
let findAll = 0;         //""    ""      ""     "" determiner la fin du jeu
let count = 12;          //Variable du compteur de coup


function flip() {
    const cards = document.querySelectorAll('.cardBloc')        //Function qui retourne les cartes au clic
    for (let card of cards) {
        card.addEventListener("click", function () {
            this.childNodes[1].classList.add("activate");
        });
    }
}
flip()


function getData() {
    const cards = document.querySelectorAll('.card')        // Function utilisé pour récupérer le data attribute des cartes au clic.
    for (let card of cards) {
        card.addEventListener("click", function () {
            if (clickCheck === 0) {
                result1 = this;
                result1.classList.add('disableClick')
                clickCheck++;
                return;
            }
            if (clickCheck === 1) {
                result2 = this;
                result2.classList.add('disableClick')
                clickCheck++; 
                countLeft()
                check()
            }
        });
    }
}


function check() {
    if (result1.getAttribute('data-att') === result2.getAttribute('data-att')) {         // Function qui compare les carte savoir si les DT match et reretourne les cartes
        document.getElementById("container").classList.add("disableClick")               // dans le cas contraire.   
        findAll++;
        console.log(findAll)
        clickCheck = 0;
        result1 = 0;
        result2 = 0;
        setTimeout(function () {
            document.getElementById("container").classList.remove("disableClick")
        }, 1500);
    }
    if (findAll === 6) {                                                                //if statement qui determine la victoire à partir de "findAll(voir début du code)"
        setTimeout(function () {
            alert("Bravo vous avez terminé le jeu !")
            location.reload();
        }, 1000);

    }
    else {
        document.getElementById("container").classList.add("disableClick")
        setTimeout(function () {
            clickCheck = 0;
            result1.classList.remove('disableClick')
            result1.classList.remove('activate')
            result2.classList.remove('disableClick')
            result2.classList.remove('activate')
        }, 1500);
        setTimeout(function () {
            document.getElementById("container").classList.remove("disableClick")
        }, 2000);
    }
}


function randomize() {                                                                  //Function qui utilise l'order flexblox pour random le placement des cartes.
    randomCard = document.getElementsByClassName("cardBloc");
    for (const card of randomCard) {
        let rngNumber = Math.floor(Math.random() * randomCard.length);
        card.style.order = rngNumber;
    };
}


function countLeft() {                                                   //Function qui décrémente le compteur ou affiche le méssage d'erreur.
    remaining = document.getElementById("counts")
    remaining.innerText = count;
    if (clickCheck === 2) {
        count--;
        remaining.innerText = count;
        clickCheck = 0;
    }
    if (count === 0 && findAll !== 5) {
        setTimeout(function () {
            alert("Vous avez perdu. Essayez encore !")
            location.reload();
        }, 1000)
    }
}


flip()
getData()
countLeft()
randomize()