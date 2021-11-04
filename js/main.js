
let clickCheck = 0;
let findAll = 0;
let count = 12;


function flip() {
    const cards = document.querySelectorAll('.cardBloc')
    for (let card of cards) {
        card.addEventListener("click", function () {
            this.childNodes[1].classList.add("activate");
        });
    }
}
flip()

function getData() {
    const cards = document.querySelectorAll('.card')

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
    if (result1.getAttribute('data-att') === result2.getAttribute('data-att')) {
        document.getElementById("container").classList.add("disableClick")
        findAll++;
        console.log(findAll)
        clickCheck = 0;
        result1 = 0;
        result2 = 0;
        setTimeout(function () {
            document.getElementById("container").classList.remove("disableClick")
        }, 1500);
    }
    if (findAll === 6) {
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

function randomize() {
    randomCard = document.getElementsByClassName("cardBloc");
    for (const card of randomCard) {
        let rngNumber = Math.floor(Math.random() * randomCard.length);
        card.style.order = rngNumber;
    };
}


function countLeft() {
    remaining = document.getElementById("counts")
    remaining.innerText = count;
    if (clickCheck === 2) {
        count--;
        remaining.innerText = count;
        clickCheck = 0;
    }
    if (count === 0){
        setTimeout(function(){
            alert("Vous avez perdus. Essayez encore !")
            location.reload();
        },1000)
        
    }
}


flip()
getData()
countLeft()
randomize()