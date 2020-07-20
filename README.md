# jaws
David Anderson. July 20, 2020.

# Jaws Proposal

## What is Jaws?

It's a popular 1974 film by Stephen Spielberg you dummy! and one that's largely credited with creating the blueprint for the modern Hollywood blockbuster! It's also a board game based off that property, and that's what we're focusing on here. It's a sort of bizarre asynchronous take on Battleship that really captures the tone of the game. This adaptation will maintain that tone and sense of tension while stripping down the core, for the needs of time and practical consideration of the original multiplayer format for the game.

Jaws (a shark played in this instance played by the computer), and Quint (a surly old sharkhunter played by the player) take turns. Jaws wants to eat everything, and he'll move randomly (or semi-randomly) across the board each turn. The shark is trying to eat as many people as possible. The player is trying to tag the shark with two trackerss they can use to bring him down, but the primary means they have of tracking the shark is the location of their last kills. The player's objective is to hit Jaws with a set amount of trackers - but their amout of actions are limited and penned in by having limited information for tracking Jaws.    

## Wireframe

(Your wireframes go here. Preferably two or more)
<img src='./https://wireframe.cc/pro/pp/06871bde6360309'></img>


## Initial thoughts on game structure
I love how this project loops in so many of the things we covered (with some of the fundamentals here potentially being adapted from tic tac toe). Completing it to MVP would make for a fun and playable game, but the exciting thing here is how expandable it is. I'll need to think when factoring code about what features might want to expand later, because I think there's a lot of flexibility in where this could go.

I have the core logic mapped out for the most part, and since it's based off a (mostly) diceless board game, I don't need to work about complex probabilities with it. We can expect it to look something like this.

* Game start, the news panel shows instructions and offers a start button (maybe put in a quit/reset button too)? map and nav bars initialized. The general design structure of all of this will stay the same over the state of the game.

* Game draws from an array of arrays (or maybe an object, depending on how complicated it gets) that populates the beaches with swimmers (displayed on the lower right panel, and maybe on the map itself, if it doesn't get too crowded). News is updated accordingly. The news panel is updated accordingly.

* Shark turn. The shark moves three random spaces (water or beach). The complexity of land vs. water spaces will be a challenge, but I'd rather avoid a slapdash solution that makes it harder to scale with something like larger or customized maps. Presumably, I can just tell the shark move N, E, S, or W three times, with potential options scratched off if they're abutting land. I'll need to mess around to see if that randomized structure still keeps the gameplay compelling, but I'll need to find balance for the sake of fun. Could also potentially put in place more complex navigation that points Jaws to another beach and does some primitive routing there.

* Impact of shark turn. Total death count iterates up once for each swimmer eaten. the shark and swimmer panels are adjusted accordingly. Player only sees the kill count for each beach and any barrels triggered. Maybe cue some music. maybe show a splash pop-up of pixel Jaws doing something wicked cool. Like jumping out of a wave, or diving deep underwater, or riding a snowboard.

* Player turn. Will likely be handled as a JS class (or maybe a single player class). Player gets set amount of actions (probably 3 to 5) to perform one of four choices, chosen through a button click.

** Move. The player can move to an adjacent shore or water space. I'm figuring I'll use UI button prompts for the direction, because it could be awkward to otherwise include the computer. Figuring out navigation without having a twisted mess of if-then statements will be the biggest issue here. Quint will move from panel to panel accordingly.

** Collect barrel. You can do this on a dock. In the source game, there are actually three characters, and moving barrels is a part of Hooper's tasks. I'd like to get there eventually, but for now, we'll just have the docks iterate a new barrel at given variables. For the sake of balance, I'll have to find some way to make barrels a limited resource, but  that will require some tweaking. Collecting a barrel raises the total for usage, which is registered on the Quiint panel.

** Save swimmer, making them less vulnerable to Jaws. Maybe randomize the number of swimmers need to save within a threshold, like with Jaws' eating? This function will need to reduce the swimCount and the appropriate panel accordingly. DOM object manipulation will be recurring with this project.

** Fire barrel. Available once per turn on same or adjacent square. reduces barrelCount, tags shark if he's on that square (and calls a win condition if it's the second tag), and displays both of those changes on the screen. If you don't tag the shark, that square will need to be marked with it, and any time the shark passes through, it records on the turn update.

* After all moves are complete, player clicks reset. The beach repopulates over whichever swimmers are still left and begins the shark's turn again. 

## Phases of Completion
(phase 0 represents MVP)

Phase -3 (the skeleton): CSS/HTML in place. Buttons are registering results in the appropriate places with console.logs, JS files for the major components (shark, player, board) to keep everything neat and expandable. A sketch of functions already in place for all of them.

Phase -2 (player agency): Player movements are untethered to a turn system yet, but all player actions are working and (ideally) have visible animation of that in the graphical interface. In either case, the player's actions and impact are registering as they shold.

Phase -1 (shark agency): The computer can control the shark. It knows how many turns to stop at and understands the moves available. Encounters with humans are well balanced, and the threat of a loss condition rises steadily while only the shark is moving.

Phase 0 (the facade): The variables used for tracking human and shark agency are all ported neatly to the appropriate panels for display in index.html. Board population works and is initiated and ended properly. Win and loss conditions are in place and working properly.

Phase 1 (the makeover): With the fundamentals in place, spruce up the art. be<tter pixel graphics for swimmers, characters(s), and Jaws. 

Phase 2 (Hooper): Bring in Hooper as a second character. Hooper functions very similarly to Quint so he can use the same class extended with just one or two extra features added into. The bigger issues are adjusting the UI and game balance.

Phase 3 (Brody): Brody moves exclusively on land (but not water), can shut down one beach at a time, and can move barrels. Less issues with UI and balance here, but they'll still be necessary. Expanding the class in a way that works should be relatively simple too.

Phase 4 (map choice): include option to change the configuration or scale of the map, but this could include a WHOLE lot of refactoring.

## Links and Resources
