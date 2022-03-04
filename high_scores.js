function buildHighScores(scores) {
	let highscores = "";
	for (score in scores)
	{
		highscores += `<tr><td>${scores[score]["date"]}</td><td>${scores[score]["duration"]}</td></tr>`;
	}
	document.getElementsByTagName("tbody")[0].innerHTML = highscores;
}