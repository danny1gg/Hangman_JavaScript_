<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name = "viewport" content="width=device-width, initial-scale=1">
	<link rel = "stylesheet" type = "text/css" href = "css/style.css">
	<title>Hangman</title>
</head>
<body>
	<h2 class = "align_center"> Hangman</h2>
	<div id = "container">
		<img src="imgs/load_img_0.jpg" width="350px"  title="load_img">
		<h2 id ="displayCorrectWord"></h2>
		<div id = "input_status">
			Tipe a letter: 
			<input id = "letterInput" type = "text" maxlength = "1" name = "letterInput" onInput = "validateLetter();" autofocus>
		</div>
		<h4 id = "displayEnteredLetters" style = "color: grey;"></h4>
		<h4 id = "error" style = "color: red;"></h4>
		<button id = "reloadPage" class = "glow_btn" onclick = "location.reload();" style = "visibility: hidden;">
			Play again
		</button>
	</div>
	<script type="text/javascript" src="JS/array_of_words.js"></script>
	<script type = "text/javascript" src="JS/script.js"></script>

</body>
</html>