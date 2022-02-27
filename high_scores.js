function buildHighScores(scores) {
	let highscores = "";
	scores.forEach((score) = {
		highscores += `<tr><td>${score["date"]}</td><td>${score["duration"]}</td></tr>`;
	});
	document.getElementByTagName("tbody").innerHTML = highscores;
}