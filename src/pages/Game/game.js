import React from "react";
import ImageContainer from "../../components/ImageContainer/imageContainer";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer";
import Floor from "../../components/Floor/floor";
import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';


export default class Game extends React.Component {

       
  render() {
     var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameArea', { preload: preload, create: create });
    function  preload () {

            game.load.image('logo', '/public/images/fsc.png');

        }

       function create () {

            var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);

  } 
  return (
   <div>
     <div className="wall">
      <div className="projects">
        

      <div id="gameArea" />
      </div>
      </div>
      <Floor/>
      </div>
    );

  }
}