
import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
    player : Phaser.GameObjects.Sprite;
    constructor() {
        super("game");
    }
    preload() {
        this.load.image("player","imgs/no_anim_0.png");
    }
    create() {
        console.log("game create");
        this.player = this.add.sprite(128,128,"player");
        this.tweens.add({
            targets: this.player,
            props: {
                y: { value: 0, ease: "Linear"},
                x: {value: 0, ease: "Cubic"}
            },
            duration: 750,
            yoyo: true,
            repeat: -1,
        })
    }
}