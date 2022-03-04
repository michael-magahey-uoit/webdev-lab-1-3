function sameBlock(x1, y1, x2, y2) {
	let firstRow = Math.floor(y1 / 3) * 3;
	let firstCol = Math.floor(x1 / 3) * 3;
	return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
}

function sameRow(x1, y1, x2, y2) {
	return y1==y2;
}

function sameColumn(x1, y1, x2, y2) {
	return x1==x2;
}

function getRandomStarting(x, y) {
	let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (int i = 0; i < 10; i++)
	{
		if (possibleNumbers.includes(getValueAtCell(i + 1, y))
		{
			possibleNumbers.splice(possibleNumbers.indexOf(getValueAtCell(i + 1, y)));
		}
		if (possibleNumbers.includes(getValueAtCell(x, i + 1))
		{
			possibleNumbers.splice(possibleNumbers.indexOf(getValueAtCell(x, i + 1)));
		}
	}
	let firstX = Math.floor(x / 3) * 3;
	let firstY = Math.floor(y / 3) * 3;
	for (int i = firstX; i < firstX + 3; i++)
	{
		for (int j = firstY; j < firstY + 3; j++)
		{
			if (possibleNumbers.includes(getValueAtCell(i + 1, j + 1)))
			{
				possibleNumbers.splice(possibleNumbers.indexOf(getValueAtCell(i + 1, j + 1)));
			}
		}
	}
	return possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];
}

function getRandomPositionWithinBlock(block) {
	return "Unfinished";
}

function getValueAtCell(x, y) {
	return document.getElementById(`cell${x}${y}`).innerHTML;
}

function attemptMove(x, y, value) {
	//Write Move
	document.getElementById(`cell${x}${y}`).innerHTML = value;
	//Check Column and Row Error
	for (int i = 0; i < 10; i++)
	{
		if (getValueAtCell(i + 1, y) == value)
		{
			document.getElementById(`cell${x}${y}`).backgroundColor = "red";
		}
		if (getValueAtCell(x, i + 1) == value)
		{
			document.getElementById(`cell${x}${y}`).backgroundColor = "red";
		}
	}
	//Check Block Error
	let firstX = Math.floor(x / 3) * 3;
	let firstY = Math.floor(y / 3) * 3;
	for (int i = firstX; i < firstX + 3; i++)
	{
		for (int j = firstY; j < firstY + 3; j++)
		{
			if (getValueAtCell(i + 1, j + 1) == value)
			{
				document.getElementById(`cell${x}${y}`).backgroundColor = "red";
			}
		}
	}
	//Append Move to move list
}

function undoMove(x, y) {
	document.getElementById(`cell${x}${y}`).innerHTML = "";
	document.getElementById(`cell${x}${y}`).backgroundColor = "";
}

function generateBoard() {
	for (int i = 0; i < 3; i++) //Rows
	{
		limitY = (i * 3) + 3;
		for (int j = 0; j < 3; j++) //Columns
		{
			limitX = (j * 3) + 3;
			for (int k = 0; k < Math.floor(Math.random() * 2) + 1; k++) //Random fills between 1 and 3 positions within the block
			{
				let randomX = Math.floor(Math.random() * 3) + limitX - 1; //Random X between 3 blocks back and the right of the limit (0, 1, 2 || 3, 4, 5 || 6, 7, 8 || ...)
				let randomY = Math.floor(Math.random() * 3) + limitY - 1; //Same as above, but with the Y limit (only changes every 3 blocks)
				
				while (randomX > limitX || randomY > limitY || randomX < limitX - 3 || randomY < limitY - 3 || getValueAtCell(randomX, randomY) != "") //Incase we generate an invalid number or used position
				{
					randomX = Math.floor(Math.random() * 3) + limitX - 1;
					randomY = Math.floor(Math.random() * 3) + limitY - 1;
				}
				
				//Valid position that isnt filled
				document.getElementById(`cell${randomX+1}${randomY+1}`).innerHTML = getRandomStarting(randomX, randomY);
			}
		}
	}
}