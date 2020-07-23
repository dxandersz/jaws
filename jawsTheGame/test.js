let shark_position = 1;
let player_position = 1; 


// The base unit for the board size. Square this to make the board tiles. The key value for a lot of tile trait calculations.
board_base = 5
board_size = board_base * board_base
// Important! At least until I fold in something more sophisticated. Since it's the only designated land space, the code will be referencing it frequently
board_center = Math.ceil(board_size/2);

//The number of cells on the board you'll need to move in either direction to go NESW
let directions = [-1, board_base, 1, -(board_base)]


//Spielberg directs the board, evaluating decisions made by the player or shark.

const spielberg = {
    //determines the shark's location on the board.
    sharkStart: function() {
        //Since the center square will always be land, we exclude it. Will need to refactor if I want to mix in more complex maps.
        sharkIndex = Math.ceil(Math.random() * (board_size - 1));
        console.log(sharkIndex);
        if (sharkIndex < board_center) {
            shark_position = sharkIndex;
            console.log("Under 13: " + shark_position)
        }
        else {
            shark_position = sharkIndex + 1;
            console.log("Over 13: " + shark_position)
        }

    },
    //So we can run through  
    index: 0,
    //Evaluates whether a tile can be moved on but also whether or not it triggers a special event.
    tileType: [],
    // Stores whether or not you can move NESW from this tile.
    //Tracks the barrels
    tagged: [],
};

console.log(shark_position);
spielberg.sharkStart();