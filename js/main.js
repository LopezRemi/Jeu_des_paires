
let clickCheck = 0;


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
                console.log(result1)
                console.log(clickCheck)
                return;
            }
            if (clickCheck === 1) {
                result2 = this;
                result2.classList.add('disableClick')
                console.log(result2)
                console.log(clickCheck)
                check()
            }
        });
    }
}

function check() {
    if (result1.getAttribute('data-att') === result2.getAttribute('data-att')) {
        clickCheck = 0;
        result1 = 0;
        result2 = 0;
        console.log(result1)
        console.log(result2)
        console.log(clickCheck)

    } else {
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
    console.log(randomCard)
    for (const card of randomCard) {
        let rngNumber = Math.floor(Math.random() * randomCard.length);
        card.style.order = rngNumber;
    };
}

flip()
getData()
randomize()