
// Registers the tiles the shark has pathed through to calculate deaths and barrel triggers.
// Shark current is assigned to the shark's current square. 
//Movements: north: shark_current -1, east: shark_current +5, south: shark_current +1, west: shark_current -5;   
//on board start, shark is assigned to a random position from water_array
let shark_current = 0;
//The shark's current position. Randomized at the beginning of a turn. 
//Stores the positions the shark has been in to compare against events.
let shark_path = [];
//Setting this a a variable for special events/different shark classes in extension.
let shark_moves = 3;

//The shark just swims and eats, so not a lot to put in place here..
class Shark {
    constructor(health, move_speed) {
        this.move_speed = move_speed;
        this.health = 1;
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

jaws = new Shark(shark_current);

console.log(shark_current)
console.log(shark_path)

jaws.initiateShark();
console.log(shark_current);

