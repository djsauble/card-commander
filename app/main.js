import Arena from './modules/arena.js';

window.CardCommander = (function () {
    
    // Initialize the arena
    var arena = Arena();
    arena.draw();

    // Set up event handler
    window.document.addEventListener('click', evt => {
        arena.toggle(evt.clientX, evt.clientY);
        arena.draw();
    });

    return {
        get arena() {
            return arena;
        }
    }
})();