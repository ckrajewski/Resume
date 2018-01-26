import React from "react";
import ImageContainer from "../../components/ImageContainer/imageContainer";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer";
import Floor from "../../components/Floor/floor";
import GameContainer from "../../components/GameContainer/gameContainer"
import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';


export default class Game extends React.Component {
  
    constructor() {
        super();
        if(window.localStorage.getItem('HighScore')==null){
          window.localStorage.setItem('HighScore',0);
        }
        this.state = {
            "HighScore":window.localStorage.getItem('HighScore')
        };
      }
  componentDidMount() {
        if (document.getElementsByClassName("mobileGameDescriptionContainer")[0].style.display == "block") {
            return;
        }
        var gameContainer = document.getElementsByClassName('gameFrameContainer')[0].getBoundingClientRect();
        var gameHeight = gameContainer.width * 1.3;
        if (gameHeight > 500) {
            gameHeight = 500;
        }
        game = new Phaser.Game(gameContainer.width - 50, gameHeight, Phaser.AUTO, 'gameArea', {
            preload: preload,
            create: create,
            update: update,
            render: render
        });
        //this.setGameCreated();

        function preload() {

            game.load.image('bullet', '/public/images/assets/games/invaders/bullet.png');
            game.load.image('enemyBullet', '/public/images/assets/games/invaders/enemy-bullet.png');
            game.load.spritesheet('invader', '/public/images/assets/games/invaders/invader32x32x4.png', 32, 32);
            game.load.image('ship', '/public/images/assets/games/invaders/player.png');
            game.load.spritesheet('kaboom', '/public/images/assets/games/invaders/explode.png', 128, 128);
            game.load.image('starfield', '/public/images/assets/games/invaders/starfield.png');
            game.load.image('background', '/public/images/assets/games/starstruck/background2.png');

        }
        var game;
        var player;
        var aliens;
        var bullets;
        var bulletTime = 0;
        var cursors;
        var enemyBullets;
        var bullet;
        var fireButton;
        var explosions;
        var starfield;
        var score = 0;
        var scoreString = '';
        var scoreText;
        var lives;
        var livesText;
        var enemyBullet;
        var firingTimer = 0;
        var stateText;
        var livingEnemies = [];
        var live;
        var livesText;
        var livesString = "Lives : ";
        var numberOfLives = 3;
        var customBounds = {};
        var respawnDelay;
        var gameOver = false;
        var react = this;
        var numAliens = game.rnd.integerInRange(15, 22);
        var totalAliens = 0;

        function create() {

            //game.physics.startSystem(Phaser.Physics.ARCADE);
            game.world.setBounds(0, 0, game.width, game.height * 2);
            game.physics.startSystem(Phaser.Physics.P2JS);

            //var areaSpawn1=new Camera(game,
            //game.physics.p2.restitution = 0.9;
            //  The scrolling starfield background
            starfield = game.add.tileSprite(0, 0, game.width, game.height * 2, 'starfield');

            //game.physics.arcade.setBoundsToWorld();
            //  Our bullet group
            bullets = game.add.group();
            bullets.enableBody = true;
            bullets.physicsBodyType = Phaser.Physics.ARCADE;
            bullets.createMultiple(30, 'bullet');
            bullets.setAll('anchor.x', 0.5);
            bullets.setAll('anchor.y', 1);
            bullets.setAll('outOfBoundsKill', true);
            bullets.setAll('checkWorldBounds', true);

            // The enemy's bullets
            enemyBullets = game.add.group();
            enemyBullets.enableBody = true;
            enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
            enemyBullets.createMultiple(30, 'enemyBullet');
            enemyBullets.setAll('anchor.x', 0.5);
            enemyBullets.setAll('anchor.y', 1);
            enemyBullets.setAll('outOfBoundsKill', true);
            enemyBullets.setAll('checkWorldBounds', true);
            enemyBullets.setAll('KILL_CAMERA_BOUNDS', true);

            //  The hero!
            player = game.add.sprite(game.width / 2, game.world.height - 50, 'ship');
            player.anchor.setTo(0.5, 0.5);
            game.physics.enable(player, Phaser.Physics.ARCADE);
            game.camera.follow(player);
            player.body.gravity.y = -5000;
            //  The baddies!
            aliens = game.add.group();
            aliens.enableBody = true;
            aliens.physicsBodyType = Phaser.Physics.ARCADE;

            createAliens(numAliens);

            //  The score
            scoreString = 'Score : ';
            scoreText = game.add.text(10, 10, scoreString + score, {
                font: '34px Arial',
                fill: '#fff'
            });
            scoreText.fixedToCamera = true;
            //  Lives
            lives = game.add.group();
            livesText = game.add.text(game.world.width - 150, 10, livesString + numberOfLives, {
                font: '34px Arial',
                fill: '#fff'
            });
            livesText.fixedToCamera = true;
            //  Text

            stateText = game.add.text(400, 300, lives, {
                font: '34px Arial',
                fill: '#fff'
            });
            stateText.anchor.setTo(0.5, 0.5);
            stateText.visible = false;
            stateText.fixedToCamera = true;


            //  An explosion pool
            explosions = game.add.group();
            explosions.createMultiple(30, 'kaboom');
            explosions.forEach(setupInvader, this);

            //  And some controls to play the game with
            cursors = game.input.keyboard.createCursorKeys();
            fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            game.physics.p2.enable(player);
            player.body.setCircle(30);
            player.body.collideWorldBounds = true;
            // game.physics.arcade.checkCollision.top = false;
            // game.physics.arcade.checkCollision.bottom=false; 
            var bounds = new Phaser.Rectangle(0, game.world.height - 20, game.width, 20);
            customBounds = {
                left: null,
                right: null,
                top: null,
                bottom: null
            };
            createPreviewBounds(bounds.x, bounds.y, bounds.width, bounds.height);
            //var graphics = game.add.graphics(bounds.x, bounds.y);
            //graphics.lineStyle(4, 0xffd900, 1);
            //graphics.drawRect(0, 0, bounds.width, bounds.height);

        }

        function setAlienAnimations(alien) {

            alien.anchor.setTo(0.5, 0.5);
            alien.animations.add('fly', [0, 1, 2, 3], 20, true);
            alien.play('fly');
            alien.body.moves = false;
            alien.body.collideWorldBounds = true;
        }

        function createAlien() {
            //var position=generateAlienPosition(player);

            var x = game.rnd.integerInRange(40, game.width - 40);
            if (player.y > game.height) {
                var y = game.rnd.integerInRange(60, game.height);
            } else if (player.y + game.height > game.world.height - 50) {

                var y = game.rnd.integerInRange(player.y + (game.height / 2), game.world.height - 50);
            } else if (player.y < game.height) {

                var y = game.rnd.integerInRange(player.y + game.height, game.world.height - 50);
            }
            var alien = aliens.create(x, y, 'invader');
            setAlienAnimations(alien);

        }

        function createAliens(numberOfAliens) {

            var playerStartPosX = game.width / 2;
            var playerStartPosY = game.world.height - 50;
            for (var i = 0; i < numberOfAliens; i++) {
                //add sprite within an area excluding the beginning and ending
                //  of the game world so items won't suddenly appear or disappear when wrapping
                var x = game.rnd.integerInRange(40, game.width - 40);
                var y = game.rnd.integerInRange(80, playerStartPosY - 50);
                var x2 = game.rnd.integerInRange(40, playerStartPosX);
                var x3 = game.rnd.integerInRange(playerStartPosX, game.width - 40);
                var y2 = game.rnd.integerInRange(playerStartPosY - game.world.height * .15, playerStartPosY - game.world.height * .35);
                var y3 = game.rnd.integerInRange(playerStartPosY - game.world.height * .45, playerStartPosY - game.world.height * .65);
                var y4 = game.rnd.integerInRange(playerStartPosY - game.world.height * .75, 100);
                var alienArray = [];
                aliens.create(x, y, 'invader');
                aliens.create(x2, y2, 'invader');
                aliens.create(x3, y2, 'invader');
                aliens.create(x2, y3, 'invader');
                aliens.create(x3, y3, 'invader');
                aliens.create(x2, y4, 'invader');
                aliens.create(x3, y4, 'invader');


            }

            aliens.forEach(function(alien) {
                setAlienAnimations(alien);
            });
            var tween = game.add.tween(aliens).to({
                x: 20
            }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);

            //tween.onLoop.add(descend, this);
        }

        function setupInvader(invader) {

            invader.anchor.x = 0.5;
            invader.anchor.y = 0.5;
            invader.animations.add('kaboom');

        }

        function descend() {

            aliens.y += 10;

        }

        function update() {

            //  Scroll the background
            starfield.tilePosition.y += 2;
            if (player.alive) {
                //  Reset the player, then check for movement keys
                player.body.velocity.setTo(0, 0);

                if (cursors.left.isDown) {
                    player.body.velocity.x = -200;
                } else if (cursors.right.isDown) {
                    player.body.velocity.x = 200;
                } else if (cursors.up.isDown) {
                    player.body.velocity.y = -400;
                } else if (cursors.down.isDown) {
                    player.body.velocity.y = 400;
                }
                //  Firing?
                if (fireButton.isDown) {
                    fireBullet();
                }

                if (game.time.now > firingTimer) {
                    enemyFires();
                }

                //  Run collision
                game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
                game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
                game.physics.arcade.overlap(aliens, player, enemyRunsIntoPlayer, null, this);
                game.physics.arcade.overlap(aliens, player, enemyRunsIntoPlayer, null, this);
                game.physics.arcade.overlap(aliens, aliens, alienRunsIntoAlien, null, this);
                //game.world.wrap(player, 100, true);
                game.world.wrap(player, -20, false, false, true);
                if (Math.ceil(player.y) < 25) {
                    aliens.removeAll();
                    createAliens(numAliens);
                    // createAliens(Math.ceil(numAliens-(aliens.children.length/7)));
                }

            }
            if (!gameOver && respawnDelay != 0 && game.time.now - respawnDelay > 2500) {
                player.x = game.width / 2;
                player.y = game.world.height - 50;
                respawnDelay = 0;
                aliens.removeAll();
                createAliens(numAliens);
                //createAliens(Math.ceil(numAliens-(aliens.children.length/7)));
                enemyBullets.killAll();
                player.revive();

            }

        }

        function render() {

            // for (var i = 0; i < aliens.length; i++)
            // {
            //     game.debug.body(aliens.children[i]);
            // }

        }

        function alienRunsIntoAlien(alien1, alien2) {
            alien1.kill()

        }

        function collisionHandler(bullet, alien) {

            //  When a bullet hits an alien we kill them both
            bullet.kill();
            alien.kill();

            //  Increase the score
            score += 20;
            scoreText.text = scoreString + score;

            //  And create an explosion :)
            var explosion = explosions.getFirstExists(false);
            explosion.reset(alien.body.x, alien.body.y);
            explosion.play('kaboom', 30, false, true);
            alien.destroy();
            createAlien();

        }

        function enemyRunsIntoPlayer(player, enemy) {


            if (numberOfLives >= 1) {
                //live.kill();
                numberOfLives--;
                livesText.text = livesString + numberOfLives;
            }

            //  And create an explosion :)
            var explosion = explosions.getFirstExists(false);
            explosion.reset(player.body.x, player.body.y);
            explosion.play('kaboom', 30, false, true);
            player.kill();
            // When the player dies
            if (numberOfLives < 1) {
                // player.kill();
                enemyBullets.callAll('kill');

                stateText.text = " GAME OVER \n Score : " + score + " \n Click to restart";
                stateText.visible = true;
                gameOver = true;
                if (react.refs.HighScore && react.state.HighScore < score) {
                    react.setState({
                        "HighScore": score
                    });
                    window.localStorage.setItem('HighScore', score);
                }
                //the "click to restart" handler
                game.input.onTap.addOnce(restart, this);
            } else {
                respawnDelay = game.time.now;
            }

        }

        function enemyHitsPlayer(player, bullet) {

            bullet.kill();



            if (numberOfLives >= 1) {
                numberOfLives--;
                livesText.text = livesString + numberOfLives;
            }

            //  And create an explosion :)
            var explosion = explosions.getFirstExists(false);
            explosion.reset(player.body.x, player.body.y);
            explosion.play('kaboom', 30, false, true);
            player.kill();
            // When the player dies
            if (numberOfLives < 1) {
                // player.kill();
                enemyBullets.callAll('kill');

                stateText.text = " GAME OVER \n Click to restart";
                stateText.visible = true;
                gameOver = true;
                if (react.refs.HighScore && react.state.HighScore < score) {
                    react.setState({
                        "HighScore": score
                    });
                    window.localStorage.setItem('HighScore', score);
                }
                //the "click to restart" handler
                game.input.onTap.addOnce(restart, this);
            } else {
                respawnDelay = game.time.now;
            }

        }

        function enemyFires() {

            //  Grab the first bullet we can from the pool
            enemyBullet = enemyBullets.getFirstExists(false);

            livingEnemies.length = 0;

            aliens.forEachAlive(function(alien) {

                // put every living enemy in an array
                livingEnemies.push(alien);
            });


            if (enemyBullet && livingEnemies.length > 0) {

                var random = game.rnd.integerInRange(0, livingEnemies.length - 1);

                // randomly select one of them
                var shooter = livingEnemies[random];
                // And fire the bullet from this enemy
                enemyBullet.reset(shooter.body.x, shooter.body.y);

                game.physics.arcade.moveToObject(enemyBullet, player, 120);
                firingTimer = game.time.now + 2000;
            }

        }

        function fireBullet() {

            //  To avoid them being allowed to fire too fast we set a time limit
            if (game.time.now > bulletTime) {
                //  Grab the first bullet we can from the pool
                bullet = bullets.getFirstExists(false);

                if (bullet) {
                    //  And fire it
                    bullet.reset(player.x, player.y + 8);
                    bullet.body.velocity.y = -400;
                    bulletTime = game.time.now + 200;
                }
            }

        }

        function resetBullet(bullet) {

            //  Called if the bullet goes out of the screen
            bullet.kill();

        }

        function restart() {

            //  A new level starts

            //  And brings the aliens back from the dead :)
            gameOver = false;
            aliens.removeAll();
            player.x = game.width / 2;
            player.y = game.world.height - 50;



            //revives the player
            player.revive();
            //hides the text
            stateText.visible = false;
            numberOfLives = 3;
            livesText.text = livesString + numberOfLives;
            score = 0;
            scoreText.text = 'Score : ' + score;

            createAliens(numAliens);

        }

        function createPreviewBounds(x, y, w, h) {

            var sim = game.physics.p2;

            //  If you want to use your own collision group then set it here and un-comment the lines below
            var mask = sim.boundsCollisionGroup.mask;

            customBounds.left = new p2.Body({
                mass: 0,
                position: [sim.pxmi(x), sim.pxmi(y)],
                angle: 1.5707963267948966
            });
            customBounds.left.addShape(new p2.Plane());
            // customBounds.left.shapes[0].collisionGroup = mask;

            customBounds.right = new p2.Body({
                mass: 0,
                position: [sim.pxmi(x + w), sim.pxmi(y)],
                angle: -1.5707963267948966
            });
            customBounds.right.addShape(new p2.Plane());
            // customBounds.right.shapes[0].collisionGroup = mask;

            customBounds.top = new p2.Body({
                mass: 0,
                position: [sim.pxmi(x), sim.pxmi(y)],
                angle: -3.141592653589793
            });
            customBounds.top.addShape(new p2.Plane());
            // customBounds.top.shapes[0].collisionGroup = mask;

            customBounds.bottom = new p2.Body({
                mass: 0,
                position: [sim.pxmi(x), sim.pxmi(y + h)]
            });
            customBounds.bottom.addShape(new p2.Plane());
            // customBounds.bottom.shapes[0].collisionGroup = mask;

            sim.world.addBody(customBounds.left);
            sim.world.addBody(customBounds.right);
            sim.world.addBody(customBounds.top);
            sim.world.addBody(customBounds.bottom);

        }

    }
  render() {
   

  
  return (
   <div>
     <div className="wall">
      <div className="projects gameContainer">
      <GameContainer />
       <DescriptionContainer title="Space Invaders: The Infinite Frontier" descriptionContainerClass="gameDescriptionContainer">
         A modified version of space invaders that I created through phaser. In this version, you keep flying and enemies keep appearing. 
         <br />
         <br />
         <div ref="HighScore" className="highScore">
         <b> High Score : </b> {this.state.HighScore}
         </div>
         <br />
        <div className="controls">
         <b> Controls: </b>
         <br/>
         Arrows to move. Space to fire.
         </div>
         </DescriptionContainer>
      </div>
      </div>
      <DescriptionContainer title="Game Does Not Run on Mobile" descriptionContainerClass="mobileGameDescriptionContainer">
         A modified version of space invaders that I created through phaser.
         You need a keyboard to play though :(
         </DescriptionContainer>
      <Floor/>
      </div>
    );

  }
}