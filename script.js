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
	const winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

	const players = [Player("Tomas", "X"), Player("Gonzalo", "O")];

	let activePlayer = players[0];
	const switchPlayerTurn = () => {
		activePlayer = activePlayer === players[0] ? players[1] : players[0];
	};
	const getActivePlayer = () => activePlayer;

	const playRound = (position) => {
		if (isMoveValid(position)) {
			gameboard.addMarker(getActivePlayer(), position);
			if (isWinner()) {
				return console.log(`${getActivePlayer().name} you win!`);
			} else {
				switchPlayerTurn();
			}
		}
	}

	const isMoveValid = position => gameboard.getGameboard()[position] === "" ? true : false;

	const isWinner = () => {
		const boardStatus = gameboard.getGameboard();
		let winner = false;
		winCombinations.forEach(combination => {
			if (boardStatus[combination[0]] === getActivePlayer().marker && boardStatus[combination[1]] === getActivePlayer().marker && boardStatus[combination[2]] === getActivePlayer().marker) {
				winner = true;
			}
		});
		return winner;
	}

	return { playRound, getGameboard: gameboard.getGameboard };
}

function ScreenController() {
	const board = document.querySelector(".cells");
	const cells = document.querySelectorAll(".cell");
	const game = GameController();

	const displayBoard = () => {
		const board = game.getGameboard();
		cells.forEach(cell => cell.innerText = board[cell.id]);
	}
	
	board.addEventListener("click", e => {
		game.playRound(e.target.id);
		displayBoard();
	});

	displayBoard();

}

const playGame = ScreenController();