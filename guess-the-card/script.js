document.querySelector(".spread").addEventListener("click", shuffle);
document.querySelector(".overlay").addEventListener("mouseover",removeOverlay);

let deck = document.querySelectorAll(".deck");
let cardArr = [
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
    },{
        cardText: "9",
        cardId: "&#9827;"
    },{
        cardText: "8",
        cardId: "&#9827;"
    },{
        cardText: "7",
        cardId: "&#9827;"
    },{
        cardText: "6",
        cardId: "&#9827;"
    },{
        cardText: "5",
        cardId: "&#9827;"
    },{
        cardText: "4",
        cardId: "&#9827;"
    },{
        cardText: "3",
        cardId: "&#9827;"
    },{
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


function shuffle() {
    let card = document.querySelectorAll(".deck-wrapper .card");
    let randomArr = [];
    for(let i = 0 ; i < deck.length; i++) {
        deck[i].addEventListener("mouseover", hoverDeck);
        deck[i].addEventListener("click", selectedDeck);
    }  
    for(let j = 0 ; j < card.length ;j++) {
        let randomNum = Math.floor(Math.random() * cardArr.length);
        if(randomArr.length > 1) {
            function noRepeating() {
                randomArr.forEach(function(item, index) {
                    if(randomArr.indexOf(randomNum) != -1) {
                        randomNum = Math.floor(Math.random() * cardArr.length); 
                        noRepeating();
                    } 
                });
            }   
            noRepeating();
        }
        randomArr.push(randomNum);
        if(cardArr[randomNum].cardId == "&#9830;" || cardArr[randomNum].cardId == "&#9829;") {
            card[j].querySelector(".logo").innerHTML = cardArr[randomNum].cardId;
            card[j].style.color = "#ff0000";
        } else {
            card[j].querySelector(".logo").innerHTML = cardArr[randomNum].cardId;
            card[j].style.color = "#000";
        }
        let cardInfo = card[j].querySelectorAll(".cardIdInfo");   
        for(let k = 0 ; k < cardInfo.length ; k++) {
            let cardInfoPara = cardInfo[k].querySelectorAll("p");    
            for(let z = 0 ; z < cardInfoPara.length; z++) {
                if(z == 1) {
                    cardInfoPara[z].innerHTML = cardArr[randomNum].cardId;
                } else {
                    cardInfoPara[z].innerHTML = cardArr[randomNum].cardText;   
                }
            } 
        }
    } 
    shuffleSound();
} 

let possibleDeck = [];
let turn = 0;

function selectedDeck() {
    let item = this.children;
    turn++;
    if(possibleDeck.length == 0) {
        for(let z = 0 ; z < item.length ;z++) {
            possibleDeck.push(item[z]);
        }
    }
    deckShuffle.call(this, possibleDeck);
    let f = 0;
    let card = document.querySelectorAll(".deck-wrapper .card");
    for(let i = 0 ; i < 6 ; i++) {
        for(let j = deck.length ; j > 0  ; j--) {
            deck[j-1].appendChild(card[f]);
            f++;
        }
    }    
}


function deckShuffle(possibleDeck) {
    let flag = [];
    if(turn >= 2) {
        let ele = this.children;
        for(let i = 0 ; i < ele.length ; i++) {
            for(let j = 0 ;j < possibleDeck.length ; j++) {
                if(ele[i] == possibleDeck[j]) {
                    flag.push(ele[i]);
                }
            }
        }
    }
    if(flag.length == 1) {
        showResult(flag[0]);
    } else if(flag.length == 2) {
        possibleDeck = flag;
    }
}

function showResult(data) {
    document.querySelector(".overlay").style.display = "block";    
    document.querySelector(".container .deck-wrapper").classList.add("hide");
    document.querySelector(".container .hand").classList.add("hide");
    document.querySelector(".modal .result").appendChild(data);
    document.querySelector(".modal").classList.add("show");
}

function hoverDeck(e) {
    this.style.zIndex = 10;   
    document.querySelector(".overlay").classList.add("show");
}

function removeOverlay() {
    document.querySelector(".overlay").classList.remove("show");
    for(let i = 0 ; i < deck.length ; i++) {
        deck[i].style.zIndex = 0;
    }    
}

function shuffleSound() {
    let sound = new Audio("sounds/Pop Clip In-SoundBible.com-583746573.wav");
    sound.play();
}