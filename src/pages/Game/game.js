import React from "react";
import ImageContainer from "../../components/ImageContainer/imageContainer";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer";
import Floor from "../../components/Floor/floor";
import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';


export default class Game extends React.Component {

       
  render() {
    
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameArea', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('bullet', '/public/images/assets/games/invaders/bullet.png');
    game.load.image('enemyBullet', '/public/images/assets/games/invaders/enemy-bullet.png');
    game.load.spritesheet('invader', '/public/images/assets/games/invaders/invader32x32x4.png', 32, 32);
    game.load.image('ship', '/public/images/assets/games/invaders/player.png');
    game.load.spritesheet('kaboom', '/public/images/assets/games/invaders/explode.png', 128, 128);
    game.load.image('starfield', '/public/images/assets/games/invaders/starfield.png');
    game.load.image('background', '/public/images/assets/games/starstruck/background2.png');

}

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
var livesString="Lives : ";
var numberOfLives = 3;
var customBounds={};
var respawnDelay;
function create() {

    //game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.P2JS);

    //game.physics.p2.restitution = 0.9;
    //  The scrolling starfield background
    starfield = game.add.tileSprite(0, 0, 800, 1600, 'starfield');
    game.world.setBounds(0, 0, 800, 1600);
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

    //  The hero!
    player = game.add.sprite(400, 1550, 'ship');
    player.anchor.setTo(0.5, 0.5);
    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.camera.follow(player);
    player.body.gravity.y = -5000;
    //  The baddies!
    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    createAliens();

    //  The score
    scoreString = 'Score : ';
    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });
    scoreText.fixedToCamera=true;
    //  Lives
    lives = game.add.group();
    livesText=game.add.text(game.world.width - 150, 10, livesString + numberOfLives  , { font: '34px Arial', fill: '#fff' });
    livesText.fixedToCamera=true;
    //  Text
    
    stateText = game.add.text(400,300,lives,{font: '34px Arial', fill: '#fff'});
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;
    stateText.fixedToCamera=true;
/*
    for (var i = 0; i < 3; i++) 
    {
        var ship = lives.create(game.world.width - 100 + (30 * i), 60, 'ship');
        ship.anchor.setTo(0.5, 0.5);
        ship.angle = 90;
        ship.alpha = 0.4;
    }
    */
    

    //  An explosion pool
    explosions = game.add.group();
    explosions.createMultiple(30, 'kaboom');
    explosions.forEach(setupInvader, this);

    //  And some controls to play the game with
    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    game.physics.p2.enable(player);
    player.body.setCircle(30);
     player.body.collideWorldBounds=true;
    // game.physics.arcade.checkCollision.top = false;
    // game.physics.arcade.checkCollision.bottom=false; 
     var bounds = new Phaser.Rectangle(0, 1580, 800, 20);
      customBounds = { left: null, right: null, top: null, bottom: null };
    createPreviewBounds(bounds.x, bounds.y, bounds.width, bounds.height);
    //var graphics = game.add.graphics(bounds.x, bounds.y);
    //graphics.lineStyle(4, 0xffd900, 1);
    //graphics.drawRect(0, 0, bounds.width, bounds.height);
    
}
function setAlienAnimations(alien){
  alien.anchor.setTo(0.5, 0.5);
            alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            alien.play('fly');
            alien.body.moves = false;
            alien.body.collideWorldBounds = true;
}
function createAliens () {

 
    //phaser's random number generator
    var numAliens = game.rnd.integerInRange(30, 45);
 
    for (var i = 0; i < numAliens; i++) {
      //add sprite within an area excluding the beginning and ending
      //  of the game world so items won't suddenly appear or disappear when wrapping
      var x = game.rnd.integerInRange(game.width, game.world.width - game.width);
      var y = game.rnd.integerInRange(game.height, game.world.height - game.height);
      var x2 = game.rnd.integerInRange(player.x+150, player.x + 250);
      var x3 = game.rnd.integerInRange(player.x-250, player.x-100);
      var y2 = game.rnd.integerInRange(player.y-150, player.y -350);
      var alien=aliens.create(x,y, 'invader');
      var alien2=aliens.create(x2,y2, 'invader');
      var alien3=aliens.create(x3,y2, 'invader');
      setAlienAnimations(alien);
      setAlienAnimations(alien2);
      setAlienAnimations(alien3);

    
    }


    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    var tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    //  When the tween loops it calls descend
    tween.onLoop.add(descend, this);
}

function setupInvader (invader) {

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
    if (player.alive)
    {
        //  Reset the player, then check for movement keys
        player.body.velocity.setTo(0, 0);

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 200;
        }

        else if (cursors.up.isDown)
        {
            player.body.velocity.y = -400;
        }
        else if (cursors.down.isDown)
        {
            player.body.velocity.y = 400;
        }
        //  Firing?
        if (fireButton.isDown)
        {
            fireBullet();
        }

        if (game.time.now > firingTimer)
        {
            enemyFires();
        }

        //  Run collision
        game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
        game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
        game.physics.arcade.overlap(aliens, player, enemyRunsIntoPlayer, null, this);
        game.physics.arcade.overlap(aliens, player, enemyRunsIntoPlayer, null, this);
        //game.world.wrap(player, 100, true);
        game.world.wrap(player, -20, false, false, true);
   
    }
    if( respawnDelay!=0 && game.time.now - respawnDelay>2500){
      player.x=400;
      player.y=1500;
      respawnDelay=0;
      player.revive();

    }

}

function render() {

    // for (var i = 0; i < aliens.length; i++)
    // {
    //     game.debug.body(aliens.children[i]);
    // }

}

function collisionHandler (bullet, alien) {

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

    if (aliens.countLiving() == 0)
    {
        score += 1000;
        scoreText.text = scoreString + score;

        enemyBullets.callAll('kill',this);
        stateText.text = " You Won, \n Click to restart";
        stateText.visible = true;

        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }

}

function enemyRunsIntoPlayer(player,enemy){
  

    if (numberOfLives>=1)
    {
        //live.kill();
        numberOfLives--;
        livesText.text=livesString + numberOfLives;
    }

    //  And create an explosion :)
    var explosion = explosions.getFirstExists(false);
    explosion.reset(player.body.x, player.body.y);
    explosion.play('kaboom', 30, false, true);
    player.kill();
    // When the player dies
    if (numberOfLives < 1)
    {
        player.kill();
        enemyBullets.callAll('kill');

        stateText.text=" GAME OVER \n Click to restart";
        stateText.visible = true;

        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }
    respawnDelay=game.time.now;

}
function enemyHitsPlayer (player,bullet) {
    
    bullet.kill();

   

    if (numberOfLives>=1)
    {
        numberOfLives--;
        livesText.text=livesString + numberOfLives;
    }

    //  And create an explosion :)
    var explosion = explosions.getFirstExists(false);
    explosion.reset(player.body.x, player.body.y);
    explosion.play('kaboom', 30, false, true);
    player.kill();
    // When the player dies
    if (numberOfLives< 1)
    {
        player.kill();
        enemyBullets.callAll('kill');

        stateText.text=" GAME OVER \n Click to restart";
        stateText.visible = true;

        //the "click to restart" handler
        game.input.onTap.addOnce(restart,this);
    }
    respawnDelay=game.time.now;

}

function enemyFires () {

    //  Grab the first bullet we can from the pool
    enemyBullet = enemyBullets.getFirstExists(false);

    livingEnemies.length=0;

    aliens.forEachAlive(function(alien){

        // put every living enemy in an array
        livingEnemies.push(alien);
    });


    if (enemyBullet && livingEnemies.length > 0)
    {
        
        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

        // randomly select one of them
        var shooter=livingEnemies[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x, shooter.body.y);

        game.physics.arcade.moveToObject(enemyBullet,player,120);
        firingTimer = game.time.now + 2000;
    }

}

function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(player.x, player.y + 8);
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 200;
        }
    }

}

function resetBullet (bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function restart () {

    //  A new level starts
    
    //resets the life count
    lives.callAll('revive');
    //  And brings the aliens back from the dead :)
    aliens.removeAll();
    createAliens();

    //revives the player
    player.revive();
    //hides the text
    stateText.visible = false;
    numberOfLives=3;
    livesText.text=livesString + numberOfLives;
    score=0;
    scoreText.text='Score : ' + score;

}
function createPreviewBounds(x, y, w, h) {

    var sim = game.physics.p2;

    //  If you want to use your own collision group then set it here and un-comment the lines below
    var mask = sim.boundsCollisionGroup.mask;

    customBounds.left = new p2.Body({ mass: 0, position: [ sim.pxmi(x), sim.pxmi(y) ], angle: 1.5707963267948966 });
    customBounds.left.addShape(new p2.Plane());
    // customBounds.left.shapes[0].collisionGroup = mask;

    customBounds.right = new p2.Body({ mass: 0, position: [ sim.pxmi(x + w), sim.pxmi(y) ], angle: -1.5707963267948966 });
    customBounds.right.addShape(new p2.Plane());
    // customBounds.right.shapes[0].collisionGroup = mask;

    customBounds.top = new p2.Body({ mass: 0, position: [ sim.pxmi(x), sim.pxmi(y) ], angle: -3.141592653589793 });
    customBounds.top.addShape(new p2.Plane());
    // customBounds.top.shapes[0].collisionGroup = mask;

    customBounds.bottom = new p2.Body({ mass: 0, position: [ sim.pxmi(x), sim.pxmi(y + h) ] });
    customBounds.bottom.addShape(new p2.Plane());
    // customBounds.bottom.shapes[0].collisionGroup = mask;

    sim.world.addBody(customBounds.left);
    sim.world.addBody(customBounds.right);
    sim.world.addBody(customBounds.top);
    sim.world.addBody(customBounds.bottom);

}


  
  return (
   <div>
     <div className="wall">
      <div className="projects">
        

      <div id="gameArea" style="width:800px; height:800px;" />
      </div>
      </div>
      <Floor/>
      </div>
    );

  }
}