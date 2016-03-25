import MenuState from 'MenuState';
import GameState from 'GameState';

class Game extends Phaser.Game {

	constructor() {
		super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', null);

		this.state.add('MenuState', MenuState, false);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}
}

new Game();
