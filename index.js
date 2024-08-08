const prompt = require('prompt-sync')()

console.log("Welcome to the Guess the Word!")
console.log("In this game you will choose a category to guess a word from and if you get the word wrong you can try over and over again to try to guess the word from the chosen category selected.")
console.log("The categories are: Animals, Subjects, Seasons, Months, Games")
console.log("TYPE IN LOWERCASE ONLY!!!!!!!!!")

// Asking the user what category they would like to choose a word from
let user = prompt("What category would you like to guess a word from? ")

// All of the words to guess from each category
let animals = ["cat", "dog", "bird", "raccoon", "axolotyl", "whale", "hegehog", "spider", "snake", "rat", "guinea pig", "cow", "horse", "goat", ]

let subjects = ["math", "science", "english", "computer science", "art", "history", "gym", "", ""]

let seasons = ["winter", "spring", "summer", "fall"]

let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

let games = ["roblox", "minecraft", "uno", "monopoly", "connect 4", "tag", "valorant", "fortnite", "super mario", "operation", "subway surfers", "temple run"]

let attempts = 0

let guess
// What would print in the game based on what the user chose 
function playGame() {
  if (user.toLowerCase() === "animals") {
    console.log("You chose animals!")
    guess = prompt("Now try to guess what animal it is: ")

    while (guess != animals) {
      if (animals.includes(guess)) {
        console.log("You guessed the animal!")
        console.log(`You got it with ${attempts} attempts! `)
        break;
      } else {
        attempts++
        console.log("You didn't guess the word correctly")
        guess = prompt("Try again: ")
      }
    }

  } else if (user.toLowerCase() === "subjects") {
    console.log("You chose subjects!")
    guess = prompt("Now try to guess what subject it is: ")

    while (guess != subjects) {
      if (subjects.includes(guess)) {
        console.log("You guessed the subject!")
        console.log(`You got it with ${attempts} attempts! `)
        break;
      } else {
        attempts++
        console.log("You didn't guess the word correctly")
        guess = prompt("Try again: ")
      }
    }

  } else if (user.toLowerCase() === "seasons") {
    console.log("You chose seasons!")
    guess = prompt("Now try to guess what season it is: ")

    while (guess != seasons) {
      if (seasons.includes(guess)) {
        console.log("You guessed the season!")
        console.log(`You got it with ${attempts} attempts! `)
        break;
      } else {
        attempts++
        console.log("You didn't guess the word correctly")
        guess = prompt("Try again: ")
      }
    }

  } else if (user.toLowerCase() === "months") {
    console.log("You chose months!")
    guess = prompt("Now try to guess what month it is: ")

    while (guess != months) {
      if (months.includes(guess)) {
        console.log("You guessed the month!")
        console.log(`You got it with ${attempts} attempts! `)
        break;
      } else {
        attempts++
        console.log("You didn't guess the word correctly")
        guess = prompt("Try again: ")
      }
    }

  } else if (user.toLowerCase() === "games") {
    console.log("You chose games!")
    guess = prompt("Now try to guess what game it is: ")

    while (guess != games) {
      if (games.includes(guess)) {
        console.log("You guessed the game!")
        console.log(`You got it with ${attempts} attempts! `)
        break;
      } else {
        attempts++
        console.log("You didn't guess the word correctly")
        guess = prompt("Try again: ")
      }
    }
  }
}

playGame()

let playAgain = prompt("Do you want to play this game again? Yes/No ")
playAgain.toLowerCase()
while (playAgain === "no") {
  console.log("Goodbye!!!!!!!!!!!!")
  break;
}
if (playAgain === "yes"){
  playGame();
}