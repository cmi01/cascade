var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('ball', 'assets/ball.png');
}

var ball;
var cursors;

function create() {
    ball = this.physics.add.sprite(400, 300, 'ball');
    ball.setBounce(1);
    ball.setCollideWorldBounds(true);
    ball.setVelocity(100, 200);

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        ball.setVelocityX(-160);
    }
    else if (cursors.right.isDown) {
        ball.setVelocityX(160);
    }
    else {
        ball.setVelocityX(0);
    }
}
