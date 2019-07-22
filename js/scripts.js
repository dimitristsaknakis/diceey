// Generate a random number from 0-5, for each dice
let randomNumber1 = Math.floor((Math.random() * 6));
let randomNumber2 = Math.floor((Math.random() * 6));
// Hold dice image filenames in array (element indexes 0-5)
const diceImg = ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png"];

// function setDiceImage (rndmNr, imgClass) {
//     // Get imgClass element, from DOM
//     const imgSrc = document.querySelector("."+imgClass);
//     // Loop through array, set image src to filename of array element that matches
//     for (let i=0; i < diceImg.length; i++) {
//         if (rndmNr === i) {
//             imgSrc.setAttribute("src", "images/" + diceImg[i]);
//         }
//     }
// }

// function whoWins(rndmNr1, rndmNr2) {
//     // Get h1 element and player elements in array
//     let heading = document.querySelector("h1");
//     let players = document.querySelectorAll(".dice p");

//     // Set appropriate dice images; pass random number and class element to set
//     setDiceImage(rndmNr1, "img1");
//     setDiceImage(rndmNr2, "img2");

//     // Set header and add winner class to whoever wins; if draw, add draw class
//     if (rndmNr1 > rndmNr2) {
//         heading.innerText = players[0].innerText + " Wins!";
//         players[0].classList.add("winner");
//     } else if (rndmNr1 < rndmNr2) {
//         heading.innerText = players[1].innerText + " Wins!";
//         players[1].classList.add("winner");
//     } else {
//         heading.innerText = "Draw!";
//         players[0].classList.add("draw");
//         players[1].classList.add("draw");
//     }
// }

// // Call function to see which player wins and act accordingly
// whoWins(randomNumber1, randomNumber2);


/* Arrow function syntax version */ 

const setDiceImageArrow = (rndmNr, imgClass) => {
    const imgSrc = document.querySelector("."+imgClass);
    for (let i=0; i < diceImg.length; i++) {
        if (rndmNr === i) {
            imgSrc.setAttribute("src", "images/" + diceImg[i]);
        }
    }
};

const whoWinsArrow = (rndmNr1, rndmNr2) => {
    let heading = document.querySelector("h1");
    let players = document.querySelectorAll(".dice p");

    setDiceImageArrow(rndmNr1, "img1");
    setDiceImageArrow(rndmNr2, "img2");

    if (rndmNr1 > rndmNr2) {
        heading.innerText = players[0].innerText + " Wins!";
        players[0].classList.add("winner");
    } else if (rndmNr1 < rndmNr2) {
        heading.innerText = players[1].innerText + " Wins!";
        players[1].classList.add("winner");
    } else {
        heading.innerText = "Draw!";
        players[0].classList.add("draw");
        players[1].classList.add("draw");
    }
};

whoWinsArrow(randomNumber1, randomNumber2);