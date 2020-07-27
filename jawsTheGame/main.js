rules_text = "Welcome to Amity Island! "

cells = document.querySelectorAll('.tile')
let shark_position = 2;
let player_position = 1; 
let available_moves = [];
let directions = [];
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
const beach_tiles = [(board_center + north), (board_center + east), (board_center + south), (board_center + west)];

// dead swimmers are essentially a score counter. When it >= shark_goal, shark wins.
let dead_swimmers = 0;
const shark_goal = 20;
const jaws_pix = document.createElement("img");
jaws_pix.setAttribute("src", "./img/jawstile.png"); 
jaws_pix.classList.add("jaws_pix")
const orca_pix = document.createElement("img");
orca_pix.setAttribute("src", "./img/orca.png");
orca_pix.classList.add("orca_pix");

//Spielberg directs the board, evaluating decisions made by the player or shark.

const spielberg = {
    //determines the shark's location on the board.
    tagged: [],
    sharkStart: function() {
        //Since the center square will always be land, we exclude it. Will need to refactor if I want to mix in more complex maps.
        sharkIndex = Math.ceil(Math.random() * (board_size - 1));
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
        directions = []
        // holds the  values for NESW after evaluation. This hopefully keeps the moves options abstract without being unwieldy.
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
    },
    tileType: function(tile) {

    }
    // Stores whether or not you can move NESW from this tile.
    //Tracks the barrels
};


//The shark just swims and eats, so not a lot to put in place here.
class Shark {
    //might want to add dmg value later, for how many swimmers ya boi can eat.
    constructor(health, move_speed, dmg) {
        //moves per turn (bites don't count as a move)
        this.move_speed = move_speed;
        //hits the shark takes before dying.
        this.health = health;
        this.dmg = dmg
    }
    eat() {
        for (const panel of beach_tiles) {
            if (shark_position === panel) {
                dead_swimmers += Math.ceil(Math.random() * this.dmg)
                document.getElementById("last_seen").innerText = shark_position;
                cells[panel-1].append(jaws_pix);
                window.alert(`There are now ${dead_swimmers} swimmers eaten. The shark was last seen at ${shark_position}.`)
            }
        }

    }
    move() {
        for (let i = 1; i <= this.move_speed; i++) {
            console.log("Shark's position, turn beginning: " + shark_position);
            spielberg.canMove(shark_position);
            let move_index = Math.floor(Math.random() * directions.length);
            shark_position += directions[move_index];
            console.log("Shark Position, turn end: " + shark_position);
            this.eat();
            directions = [];
            let swimmers_eaten = document.getElementById('swimmers_eaten');
            swimmers_eaten.innerText = dead_swimmers;
        } 
    }
}

class Player {
    constructor(move_speed) {
        this.move_speed = move_speed;
        //Expand this later, so I can assign different variables to different characters.
        this.position = player_position;
    }
    move(direction) {
        spielberg.canMove(player_position);
        directions.forEach(e => {
            if (e === direction) {
                player_position += direction;
                this.move_speed -=1;
                cells[player_position-1].append(orca_pix);
            }
        });
        console.log(player_position);
        console.log(this.move_speed);
    }
    fireBarrel(direction) {
        
    }
    saveSwimmer() {

    }
}



//Storing a shark to experiment with.
jaws = new Shark(1, 5, 2);
quint = new Player(4);
spielberg.sharkStart(); 
jaws.move();
quint.move(south);
console.log(player_position)
quint.move(west);
console.log(player_position)
quint.move(east);
console.log(player_position)
console.log(quint.move_speed)
// let kill_counter = getElementByid, innerHTML(dead_swimmers)
