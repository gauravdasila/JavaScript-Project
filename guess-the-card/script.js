let cardData = [
    {
        cardText: "K",
        cardId: "&#9827;"
    },
    {
        cardText: "Q",
        cardId: "&#9827;"
    },
    {
        cardText: "J",
        cardId: "&#9827;"
    },
    {
        cardText: "A",
        cardId: "&#9827;"
    },
    {
        cardText: "10",
        cardId: "&#9827;"
    }, {
        cardText: "9",
        cardId: "&#9827;"
    }, {
        cardText: "8",
        cardId: "&#9827;"
    }, {
        cardText: "7",
        cardId: "&#9827;"
    }, {
        cardText: "6",
        cardId: "&#9827;"
    }, {
        cardText: "5",
        cardId: "&#9827;"
    }, {
        cardText: "4",
        cardId: "&#9827;"
    }, {
        cardText: "3",
        cardId: "&#9827;"
    }, {
        cardText: "2",
        cardId: "&#9827;"
    },
    {
        cardText: "K",
        cardId: "&#9829;"
    },
    {
        cardText: "Q",
        cardId: "&#9829;"
    },
    {
        cardText: "J",
        cardId: "&#9829;"
    },
    {
        cardText: "A",
        cardId: "&#9829;"
    },
    {
        cardText: "10",
        cardId: "&#9829;"
    },
    {
        cardText: "9",
        cardId: "&#9829;"
    },
    {
        cardText: "8",
        cardId: "&#9829;"
    },
    {
        cardText: "7",
        cardId: "&#9829;"
    },
    {
        cardText: "6",
        cardId: "&#9829;"
    },
    {
        cardText: "5",
        cardId: "&#9829;"
    },
    {
        cardText: "4",
        cardId: "&#9829;"
    },
    {
        cardText: "3",
        cardId: "&#9829;"
    },
    {
        cardText: "2",
        cardId: "&#9829;"
    },
    {
        cardText: "K",
        cardId: "&#9830;"
    },
    {
        cardText: "Q",
        cardId: "&#9830;"
    },
    {
        cardText: "J",
        cardId: "&#9830;"
    },
    {
        cardText: "A",
        cardId: "&#9830;"
    },
    {
        cardText: "10",
        cardId: "&#9830;"
    },
    {
        cardText: "9",
        cardId: "&#9830;"
    },
    {
        cardText: "8",
        cardId: "&#9830;"
    },
    {
        cardText: "7",
        cardId: "&#9830;"
    },
    {
        cardText: "6",
        cardId: "&#9830;"
    },
    {
        cardText: "5",
        cardId: "&#9830;"
    },
    {
        cardText: "4",
        cardId: "&#9830;"
    },
    {
        cardText: "3",
        cardId: "&#9830;"
    },
    {
        cardText: "2",
        cardId: "&#9830;"
    },
    {
        cardText: "K",
        cardId: "&#9824;"
    },
    {
        cardText: "Q",
        cardId: "&#9824;"
    },
    {
        cardText: "J",
        cardId: "&#9824;"
    },
    {
        cardText: "A",
        cardId: "&#9824;"
    },
    {
        cardText: "10",
        cardId: "&#9824;"
    },
    {
        cardText: "9",
        cardId: "&#9824;"
    },
    {
        cardText: "8",
        cardId: "&#9824;"
    },
    {
        cardText: "7",
        cardId: "&#9824;"
    },
    {
        cardText: "6",
        cardId: "&#9824;"
    },
    {
        cardText: "5",
        cardId: "&#9824;"
    },
    {
        cardText: "4",
        cardId: "&#9824;"
    },
    {
        cardText: "3",
        cardId: "&#9824;"
    },
    {
        cardText: "2",
        cardId: "&#9824;"
    },
];

function showOverlay(e) {
    this.style.zIndex = 10;   
    document.querySelector(".overlay").classList.add("show");
}
function removeOverlay() {
    document.querySelector(".overlay").classList.remove("show");
    for(let i = 0 ; i < deck.length ; i++) {
        deck[i].style.zIndex = 0;
    }    
}


let cards = document.querySelectorAll(".deck .card");
const deck = document.querySelectorAll(".deck");
const input = document.querySelectorAll(".selectionBox input"); 

let randomNumberArray = [];
let getRandomNumber = () => {
    var randomNumber = Math.floor(Math.random() * cardData.length);
    if (randomNumberArray.length > 1) {
        if (randomNumberArray.indexOf(randomNumber) == -1) {
            randomNumberArray.push(randomNumber);
        } else {
            return getRandomNumber();
        }
    } else {
        randomNumberArray.push(randomNumber);
    }
    return randomNumber;
}

let shuffleCard = () => {
    randomNumberArray = [];   
    for (let i = 0; i < cards.length; i++) {
        let key = getRandomNumber();
        let cardSuit = cards[i].querySelector(".card_suit");
        cardSuit.innerHTML = cardData[key].cardId;
        (cardData[key].cardId == '&#9829;' || cardData[key].cardId == '&#9830;') ?
        cards[i].style.color = "#ff0000" : cards[i].style.color = "#000000";
        let cardInfo = cards[i].querySelectorAll(".card_info");
        cardInfo.forEach(item => {
            item.querySelector(".card_info-id").innerHTML = cardData[key].cardId;
            item.querySelector(".card_info-suit").innerHTML = cardData[key].cardText;
        });
        document.querySelector(".selectionBox").style.opacity = 1;
    }
}

let getDeckCards = function() {
    let value = this.value;
    let deckCard = document.querySelectorAll("#"+value+" .card");
        return Array.from(deckCard).map(item => item);
}

let changeCards = function() {
    let cards = document.querySelectorAll(".deck .card");
    for(var i = cards.length - 1; i >= 0 ; i--) {
        if(i > 3) {
            var j = i % 4;
            deck[j].appendChild(cards[i]);
        } else {
            deck[i].appendChild(cards[i]);
        }
    }
}

let showShuffleLoader = () => {
    document.querySelector(".shuffling").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
}

let removeShuffleLoader = () => {
    document.querySelector(".shuffling").style.display = "none";
    document.querySelector(".overlay").style.display = "none"; 
}

let showResult = (userChosenCard = "") => {
    document.querySelector(".modal").classList.add("show");
    document.querySelector(".result").append(userChosenCard);
}

let resetUserChoice = () => {
    for(let i = 0 ; i < input.length; i++) {
        input[i].checked = false;
    }
}

let prevCards = [], steps = 0;
let selectedOption = function() {
    let currCards = getDeckCards.call(this);
    if(!prevCards.length) {
        prevCards = [...currCards];
    } else {
        var targetCards = [];
        for(var i = 0 ; i < currCards.length ; i++ ) {
            for(var j = 0 ; j < prevCards.length ; j++) {
                if(currCards[i].isSameNode(prevCards[j])) {
                    targetCards.push(currCards[i]);
                    steps++;
                }
            }
        }             
        prevCards = [...targetCards];
    }
    if(prevCards.length === 1) {
        var [userChosenCard] = targetCards;
        showResult(userChosenCard);
    } else if(steps > 3) {
        document.querySelector(".modal h1").textContent = "Opps you choose the wrong deck?";
        showResult();
    }
    showShuffleLoader();
    setTimeout(() => {
        changeCards();
        removeShuffleLoader();
        resetUserChoice();
    }, 1000);
}

function addEvent() {
    for(var i = 0 ; i < deck.length ; i++  ) {
        deck[i].addEventListener("mouseover", showOverlay);
    }
    document.querySelector(".spread").addEventListener("click", shuffleCard);
    document.querySelector(".overlay").addEventListener("mouseover",removeOverlay);
    for(let i = 0 ; i < input.length; i++) {
        input[i].addEventListener("click", selectedOption)
    }
}

addEvent();