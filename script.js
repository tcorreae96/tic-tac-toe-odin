function Gameboard() {
	const gameboard = ["", "", "", "", "", "", "", "", ""];

	const getGameboard = () => gameboard;

	const addMarker = (player, position) => {
		gameboard[position] = player.marker;
	}

	return { getGameboard, addMarker };
}

function Player(name, marker) {

	return { name, marker };
}

function GameController() {

	const gameboard = Gameboard();

	const players = [Player("Tomas", "X"), Player("Gonzalo", "O")];

	let activePlayer = players[0];
	const switchPlayerTurn = () => {
		activePlayer = activePlayer === players[0] ? players[1] : players[0];
	};
	const getActivePlayer = () => activePlayer;

	const playRound = () => {
		gameboard.addMarker(getActivePlayer());
		switchPlayerTurn();
	}

	gameboard.displayGameboard();

	return { playRound };
}


const game = GameController();
