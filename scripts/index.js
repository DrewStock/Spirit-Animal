//variable to store our username.
// var username = "";

var username = {
	name: "",
	initialClick: function(e) {
		e.preventDefault();

		this.name = document.getElementById('username').value;
		var label = document.getElementById('labelTag');
		var nameCorrect = "YOU MUST ENTER A NAME";
		if (this.name.length === 0) {
			label.innerHTML = nameCorrect;
			userInput();
		}
		localStorage.setItem('username', this.name);
		document.getElementById('username').style.visibility = "hidden";
		this.loadQuestions();
	},

	loadQuestions: function() {
		var label = document.getElementById('labelTag');
		var msg = "Hello, " + username + "!" + '<br />' + " Are You Ready To Find Your Your Spirit Animal?";
		label.innerHTML = msg;
		var submitButton = document.getElementById('submitButton');
		submitButton.textContent = "I'M READY!";
	},

	startGame: function(e) {
		if (e.which === 1) {
			e.preventDefault();
			window.location.href = "questions.html";
		}
	}
}

//Function that allows the username to be stored.
// var initialClick = function(e) {
// 	e.preventDefault();
// 	var userInput = function() {
// 		username = document.getElementById('username').value;
// 		var label = document.getElementById('labelTag');
// 		var nameCorrect = "YOU MUST ENTER A NAME";
// 		if(username.length === 0) {
// 			label.innerHTML = nameCorrect;
// 			userInput();
// 		}
// 		localStorage.setItem('username', username);
// 		document.getElementById('username').style.visibility = "hidden";
// 	}

//Function Change the Name Label to a "String" Message preparing the user for the test.
// 	var loadQuestions = function() {
// 	var label = document.getElementById('labelTag');
// 	var msg = "Hello, " + username + "!" + '<br />' + " Are You Ready To Find Your Your Spirit Animal?";
// 	label.innerHTML = msg;
// 	var submitButton = document.getElementById('submitButton');
// 	submitButton.textContent = "I'M READY!";
// }


//Listener to listen for the enter or return button to be pressed.
// window.addEventListener('keypress', function(e) {
// 	if (e.keyCode == 13) startGame('keypress');
// });

// //Function to take our user to the next page/to the Spirit Animal Test
// var startGame = function(e) {
// 		if (e.which === 1) {
// 			e.preventDefault();
// 			window.location.href = "questions.html";
// 		}
// 	}

// DONE: Used object oriented concepts to refactor this page using object literal to encapsulate functions to methods;

	//Runs our event listener.
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener(('click' || keyCode == 13), username.startGame);
submitButton.addEventListener(('click' || keyCode == 13), username.initialClick);