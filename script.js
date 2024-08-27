function Gameboard() {
	const gameboard = [];
	const squares = 9;
	const cells = document.querySelectorAll(".cell");


	for (let i = 0; i < squares; i++) {
		gameboard.push(Cell());
	}

	const getGameboard = () => gameboard;

	const displayGameboard = () => {
		for (let i = 0; i < squares; i++) {
			cells[i].innerText = gameboard[i].getMarker();
		}
	}

	const getCell = () => {
		cells.forEach(cell => cell.addEventListener("click", e => e.target.id));
	}

	return { getGameboard, displayGameboard, getCell };
}

function Player(name, marker) {

	return { name, marker };
}

function Cell() {
	let marker = "_";

	const addMarker = (player) => {
		marker = player.marker;
	}

	const getMarker = () => marker;

	return { addMarker, getMarker }
}

function GameController() {

	const gameboard = Gameboard();

	const players = [Player("Tomas", "X"), Player("Nicole", "O")];

	let activePlayer = players[0];
	const switchPlayerTurn = () => {
		activePlayer = activePlayer === players[0] ? players[1] : players[0];
	};
	const getActivePlayer = () => activePlayer;

	const playRound = () => {
		gameboard.getCell().addMarker(getActivePlayer().marker, gameboard.getCell());
		gameboard.printGameboard();
		switchPlayerTurn();
	}

	gameboard.displayGameboard();
	playRound();

	return { getActivePlayer };
}

const game = GameController();
