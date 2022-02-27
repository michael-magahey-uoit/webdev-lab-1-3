function sameBlock(x1, y1, x2, y2) {
	let firstRow = Math.floor(y1 / 3) * 3;
	let firstCol = Math.floor(x1 / 3) * 3;
	return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
}

function sameRow(x1, y1, x2, y2) {
	return y1 == y2;
}

function sameColumn(x1, y1, x2, y2) {
	return x1 == x2;
}

function getRandomStarting() {
	return Math.floor(Math.random() * 10) + 1;
}

function AttemptMove(x, y, value) {
	
}

function UndoMove (x, y) {
	
}

