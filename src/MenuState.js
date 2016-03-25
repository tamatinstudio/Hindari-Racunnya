	class MenuState extends Phaser.State {

	preload() {
		this.game.stage.backgroundColor = '#ffffff';
	}

	create() {
		const center = {x: this.game.width/2, y: this.game.height/2};
		const title = this.game.add.text(center.x, 50, 'Menu State', {fontSize: '60px'});
		title.anchor.set(0.5);
	}
}

export default MenuState;
