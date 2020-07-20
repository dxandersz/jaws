// Registers the tiles the shark has pathed through to calculate deaths and barrel triggers.
let shark_path = []
// Shark current is assigned to the shark's current square. 
//Movements: north: shark_current -1, east: shark_current +5, south: shark_current +1, west: shark_current -5;   
//on board start, shark is assigned to a random position from water_array
let shark_current = 0

console.log(shark_current)
console.log(shark_path)