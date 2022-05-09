var randomWord = Math.floor(Math.random() * 230);
var correctWord = array_words[randomWord];
var wordLength = correctWord.length;
var image = document.getElementsByTagName("img");
var displayCorrectWord = document.getElementById("displayCorrectWord");
var letterInput = document.getElementById("letterInput");
var displayEnteredLetters = document.getElementById("displayEnteredLetters");
var err = document.getElementById("error");
var enteredLetters = "";
var hiddenWord = "";
var remainedLetters = "";
var countCorrectLetters = 0, countWrongLetters = 0;

function isLetter(letter) {
	if ('a' <= letter && letter <= 'z') {
		return true;
	}
	return false;
}

function validateLetter() {
	var checkLetterInput = letterInput.value.toLowerCase();;
	if (isLetter(checkLetterInput)) {
		err.innerHTML = ""
		if (enteredLetters.indexOf(checkLetterInput) === -1) {
			if (correctWord.indexOf(checkLetterInput) === -1) {
				++countWrongLetters;
			}
			enteredLetters += checkLetterInput + ' ';
			displayAndUpdateWord(checkLetterInput);					
		} else {
			err.innerHTML = "Letter <b style='color:blue'>" + checkLetterInput + "</b> already tried!";
		}
		letterInput.value = "";
	} else {
		letterInput.value = "";
		err.innerHTML = "<b style='color:blue'>" + checkLetterInput + "</b> is not a letter.<br>Only letters are allowed! ";
	}
}

function displayAndUpdateWord(letter) {	
	let tmp = "";
	let tmp2 = "";
	countCorrectLetters = 0;
	for (let i = 0; i < wordLength; ++i) {
		if (correctWord[0] == correctWord[i] 
			|| letter === correctWord[i] 
			|| remainedLetters[i * 2] == '_') {
			tmp += correctWord[i] + ' ';
			tmp2 += "_ ";
			++countCorrectLetters;
		} else {
			tmp += '_ ';
			tmp2 += correctWord[i] + ' ';
		}
	}
	showStatus();
	hiddenWord = tmp;
	remainedLetters = tmp2;
	displayCorrectWord.innerHTML = hiddenWord;
	displayEnteredLetters.innerHTML = enteredLetters;
}

function showStatus() {
	if (countCorrectLetters == wordLength) {
		err.innerHTML = "<h1><b>You won!</b></h1>";
		err.setAttribute("class", "animated_winner_message");
		displayElementsAtFinalStatus();
	}
	switch (countWrongLetters) {
		case 1:
			image[0].setAttribute('src', 'imgs/load_img_1.jpg');
			break;
		case 2:
			image[0].setAttribute('src', 'imgs/load_img_2.jpg');
			break;
		case 3:
			image[0].setAttribute('src', 'imgs/load_img_3.jpg');
			break;
		case 4:
			image[0].setAttribute('src', 'imgs/load_img_4.jpg');
			break;
		case 5:
			image[0].setAttribute('src', 'imgs/load_img_5.jpg');
			break;
		case 6:
			image[0].setAttribute('src', 'imgs/load_img_6.jpg');
			break;
		case 7:
			image[0].setAttribute('src', 'imgs/load_img_7.jpg');
			err.innerHTML = "<h1><b>You lost!</b></h1>";
			err.setAttribute("class", "animated_lost_message");
			err.innerHTML += "<h3 style = 'color: red;'>The word was: <b style='color:blue'>" + correctWord+ "</b></h3>";
			displayElementsAtFinalStatus();
			break;
	}
}

function displayElementsAtFinalStatus() {
	document.getElementById("input_status").style.display = 'none';
	document.getElementById("reloadPage").style.visibility = 'visible';
}

setTimeout( function() {
	displayAndUpdateWord(correctWord[0]);
}, 500);
enteredLetters += correctWord[0] + ' ';