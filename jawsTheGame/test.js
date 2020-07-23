let shark_position = 1;
let player_position = 1; 


// The base unit for the board size. Square this to make the board tiles. The key value for a lot of tile trait calculations.
board_base = 5

//The number of cells on the board you'll need to move in either direction to go NESW
let directions = [-1, board_base, 1, -(board_base)]


//Used to evaluate a tile for traits. I deally I don't even need to build an array. I just keep reassigning variables and checking them against conditions for those variables.

function pullTile(tile) {

}

const Tile = {
    //So we can run through  
    index: 0,
    //Evaluates whether a tile can be moved on but also whether or not it triggers a special event.
    tileType: [],
    // Stores whether or not you can move NESW from this tile.
    //Is there a barrel on this space?
    tagged: false,
};


let num = 2068
console.log(num.toString() + ' blah blah blah');
