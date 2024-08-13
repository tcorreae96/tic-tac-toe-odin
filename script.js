function Gameboard() {
	/* Need to make a gameboard that's a grid of 3x3 */
	const gameboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

/* 
		Need to replace the cell on the grid with the marker of the player
			For this i need to know where the player wants to place the marker, for the first step im gonna do it with the console
				this is kind of the grid i want
					0 1 2
					3 4 5
					6 7 8
*/
	const placeMarker = (marker, place) => gameboard.splice(place - 1, 1, marker);

	const getGameboard = () => gameboard;

	const printGameboard = () => {
		let board = "";
		for (let i = 0; i < gameboard.length; i++) {
			board += `${gameboard[i]} `;
			if (i % 3 === 0 && i !== 0) {
				board += "\n"
			}
		}
		return board;
	}

	return { getGameboard, placeMarker, printGameboard };
}

function Player(name, marker) {

	// each player needs to have a name and a marker

	return { name, marker };
}

function Game() {

	/*
		Need to create the gameboard and both players, player1 and player2.

		Need to alternate the movement of the players, first goes player1 and then goes player2
			For this im thinking on doing an alternator, that goes from true to false (true = player1 move, false = player2 move)

		Need to check which player won and stop the game.
	*/

	const gameboard = Gameboard();
	const player1 = Player("Tomas", "X");
	const player2 = Player("Nicole", "O");
	
	// gameboard.placeMarker(player1.marker, 2);
	// gameboard.placeMarker(player2.marker, 1);
	// gameboard.placeMarker(player1.marker, 4);
	// gameboard.placeMarker(player2.marker, 5);
	// gameboard.placeMarker(player1.marker, 6);

	console.log(gameboard.printGameboard());
	


}

const playGame = Game();