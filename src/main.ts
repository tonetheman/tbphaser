
import Phaser from "phaser";
import MenuScene from "./menuscene";
import GameScene from "./gamescene";

window.onload = () => {
	const config : Phaser.Types.Core.GameConfig = {
		type: Phaser.AUTO,
		parent: "app",
		width: 128,
		height: 128,
		pixelArt: true,
		zoom: 4
	};

	const game : Phaser.Game = new Phaser.Game(config);
	game.scene.add("menu",MenuScene);
	game.scene.add("game",GameScene);
	game.scene.start("menu");
	
}
