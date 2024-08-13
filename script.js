function Gameboard() {
	const gameboard = ["", "", "","", "", "","", "", ""];
	const player1 = Player("Tomas", "X");
	const player2 = Player("Gonzalo", "O");

	const getGameboard = () => gameboard;

	return { gameboard, getGameboard };
}

function Player(name, marker) {

	const getPlayer = () => name;

	return { name, marker, getPlayer };
}

function Game() {

}

const gameboard = Gameboard();