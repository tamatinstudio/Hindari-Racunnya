import EdibleObject from 'EdibleObject';
import Character from 'Character';
import Data from 'EdibleObjectsData';

class GameState extends Phaser.State {

	preload() {
		this.game.currentState = this;
		this.game.stage.backgroundColor = '#ffffff';

		this.game.load.atlas('edibleObjects', 'assets/edibleobjects.png', 'assets/edibleobjects.json')
		this.game.load.spritesheet('character', 'assets/character.png', 285, 200);
	}

	create() {
		const center = {x: this.game.width/2, y: this.game.height/2};
		const title = this.game.add.text(center.x, 50, 'Hindari Racunnya', {fontSize: '60px'});
		title.anchor.set(0.5);

		let objects = this.game.add.group();

		let rnd = Math.random();
		if (rnd > 0.5) rnd = -1;
		else rnd = 1;

		const randPermen = Data.Edibles[Math.floor(Math.random() * Data.Edibles.length)];
		const randRacun = Data.Inedibles[Math.floor(Math.random() * Data.Inedibles.length)];

		console.log(randPermen, randRacun);

		this.permen = new EdibleObject(this.game, center.x - (rnd * 100), 200, 'edibleObjects', randPermen);
		objects.addChild(this.permen);

		this.racun = new EdibleObject(this.game, center.x + (rnd * 100), 200, 'edibleObjects', randRacun);
		objects.addChild(this.racun);

		this.character = new Character(this.game, center.x, center.y + 100, 'character');
		objects.addChild(this.character);
	}
}

export default GameState;
