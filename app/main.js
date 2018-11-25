import Arena from './modules/arena.js';
import Soldier from './modules/soldier.js';

window.CardCommander = (function () {
    var arena = Arena();
    
    // Add some soldiers to the arena
    arena.add(Soldier(arena.$el));
    arena.draw();

    return {
        get arena() {
            return arena;
        }
    }
})();