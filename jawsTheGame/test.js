let shark_position = 1;
let player_position = 1; 
let available_moves = []


// The base unit for the board size. Square this to make the board tiles. The key value for a lot of tile trait calculations.
let board_base = 5;
let board_size = board_base * board_base;
// Important! At least until I fold in something more sophisticated. Since it's the only designated land space, the code will be referencing it frequently
board_center = Math.ceil(board_size/2);

//Assigning easy to call variables for the directions. Should stay constant for any board with an odd board_base.
const north = -1;
const east = board_base;
const south = 1;
const west = -board_base;

console.log(north)
console.log(south)
console.log(east)
console.log(west)
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
    // Takes a given tile and figures out its relationship to various objects. Takes the value of a tile, as numbered in index.html
    canMove: function(tile) {
        // holds the  values for NESW after evaluation. This hopefully keeps the moves options abstract without being unwieldy.
        directions = []
        // Evaluates whether North is true.
        if ((tile + north) % board_base === 0 || tile + north === board_center) {
            console.log("You can't move North.");
        }
        else {
            console.log("You can move North");
            directions.push(north);
        }
        if (tile > (board_size - board_base)  || tile + east === board_center) {
            console.log("You can't move East.")
        }
        else {
            console.log("You can move East.");
            directions.push(east);
        }
        if (tile % board_base === 0 || tile + south === board_center) {
            console.log("You can't move South.");
        }
        else {
            console.log("You can move South.");
            directions.push(south);
        }
        if (tile <= board_base  || tile + west === board_center) {
            console.log("You can't move West.")
        }
        else {
            console.log("You can move West.")
            directions.push(west)
        }
        console.log(directions)
    },
    //Evaluates whether a tile can be moved on but also whether or not it triggers a special event.
    tileType: [],
    // Stores whether or not you can move NESW from this tile.
    //Tracks the barrels
    tagged: [],
};

console.log(shark_position);
spielberg.sharkStart();
spielberg.canMove(shark_position);
console.log(directions);
return directions;