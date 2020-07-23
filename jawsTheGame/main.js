/*
JAWS: THE GAME
*/


/*
THE GAME BOARD
*/
//Notes: Refactor how we define tiles. This is going to be unwieldy.

directions = []
// The base unit for the board size. Square this to make the board tiles. The key value for a lot of tile trait calculations.
board_base = 5

//Water tiles can be moved along freely.
const water_tiles = [1, 2, 3, 4, 5, 6, 10, 11, 15, 16, 20, 21, 25]
// Boundaries account for limited movement from water tiles that border the board edges or land tiles.
/*const north_boundary = [1, 6, 9, 11, 14, 16, 19, 21]
const east_boundary = [7, 8, 9, 21, 22, 23, 24, 25]
const south_boundary = [5, 7, 10, 12, 15, 17, 20, 25]
const west_boundary =  [1, 2, 3, 4, 5, 17, 18, 19]*/

//Used to evaluate a tile for 
let tile = {
    //So we can run through  
    index: 0,
    //Evaluates whether a tile can be moved on but also whether or not it triggers a special event.
    tileType: [],
    lastName: dongle,
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

  console.log(tile.index);
  console.log(tile.tileType);

//An array that can loop through the different boundary arrays to determine possible directions for the shark or player to move.
const boundaries = [north_boundary, east_boundary, south_boundary, west_boundary]

//A general purpose function to figure out the logic and possibly call for both Jaws and the player.
function move(direction) {
    
}

function moveChoice()

//The shark just swims and eats, so not a lot to put in place here..
class Shark {
    //might want to add dmg value later, for how many swimmers ya boi can eat.
    constructor(health, move_speed) {
        //moves per turn (bites don't count as a move)
        this.move_speed = move_speed;
        //hits the shark takes before dying.
        this.health = health;
    }
    //determines the starting position for the shark.
    initiateShark() {
        //shark_current = Math.ceil(Math.random() * 25);
        console.log(water_tiles)    
    }
    moveShark() {

    }  
    sharkDeath() {

    }
}

//Storing a shark for the game "A.I."
jaws = new Shark(1, 3);

//Stores the cell the shark is currently in, for mapping the next turn and determining if he's hit.
shark_current = 0;
// Array for storing the moves of the shark within the turn. Evaluated for triggering events (also really helps with testing)
shark_path = [];



/*///
////
DRIVER
   CODE
////
//*/
console.log(shark_current)
console.log(shark_path)

jaws.initiateShark();
console.log(shark_current);

