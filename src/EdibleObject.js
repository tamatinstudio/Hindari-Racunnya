import Data from 'EdibleObjectsData';

class EdibleObject extends Phaser.Image {
	constructor(game, x, y, key, frame) {
		super(game, x, y, key, frame + '.png');

		this.edible = Data[frame];

		this.anchor.set(0.5);
		this.inputEnabled = true;
		this.input.useHandCursor = true;
		this.input.enableDrag(false, true);

		this.events.onDragStart.add( () => {
			if (this.tween) this.tween.stop();
			this.game.currentState.character.waiting.play();
		}, this);

		this.events.onDragStop.add( (target, pointer) => {
			const character = this.game.currentState.character;

			// if object is dragged to character
			if (character.getBounds().contains(pointer.x, pointer.y)) {
				this.game.add.tween(this.scale).to({x: 0, y: 0}, 500, Phaser.Easing.Back.In, true)
					.onComplete.add( () => {
						character.eating.play()
							.onComplete.add( () => {
								const reset = () => this.game.state.start('GameState', true, false);

								if (this.edible) {
									character.happy.play();
									character.happyTween().onComplete.add( reset );
								} else {
									character.sad.play().onComplete;
									character.sadTween().onComplete.add( reset );
								}
							}, this);
					}, this);

				this.game.currentState.permen.inputEnabled = false;
				this.game.currentState.racun.inputEnabled = false;
			} else {
				this.tween = this.game.add.tween(this).to({x: x, y: y}, 500, Phaser.Easing.Back.Out, true);
				this.game.currentState.character.idle.play();
			}

		}, this);
	}
}

export default EdibleObject;