class Character extends Phaser.Sprite {
	constructor(game, x, y, key, frames) {
		super(game, x, y, key, frames);

		this.anchor.set(0.5);
		this.idle = this.animations.add('idle', [0]);
		this.waiting = this.animations.add('waiting', [1]);
		this.eating = this.animations.add('eating', [2,0,2,0,2,0,2,0,2,0]);
		this.eating.speed = 5;
		this.happy = this.animations.add('happy', [3]);
		this.happy.speed = 1;
		this.sad = this.animations.add('sad', [4]);
		this.sad.speed = 1;

		this.idle.play();
	}

	happyTween() {
		const y = this.position.y;
		return this.game.add.tween(this.position)
			.to({y: y-10}, 200)
			.to({y: y+10}, 200)
			.to({y: y-10}, 200)
			.to({y: y+10}, 200)
			.to({y: y-10}, 200)
			.to({y: y+10}, 200)
			.start();
	}

	sadTween() {
		const x = this.position.x;
		return this.game.add.tween(this.position)
			.to({x: x-10}, 200)
			.to({x: x+20}, 200)
			.to({x: x-20}, 200)
			.to({x: x+20}, 200)
			.to({x: x-20}, 200)
			.to({x: x+10}, 200)
			.start();
	}
}

export default Character;