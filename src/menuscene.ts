
import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {
	constructor() {
		super("menu");
	}
	create() {
		console.log("create called menu");
		this.scene.start("game");
	}
}
