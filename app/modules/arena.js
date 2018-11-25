import El from './el.js';
import Soldier from './soldier.js';

export default function Arena() {

    var toggle = function (x, y) {
        var gridX = Math.floor(x / 50);
        var gridY = Math.floor(y / 50);
        var idx = gridY * 100 + gridX;
        if (this.soldiers[idx]) {
            this.remove(this.soldiers[idx]);
        }
        else {
            var soldier = Soldier().init();
            soldier.$el.style.left = `${gridX * 50}px`;
            soldier.$el.style.top = `${gridY * 50}px`;
            this.soldiers[idx] = soldier;
        }
    };

    var remove = function (soldier) {
        var idx = this.soldiers.findIndex(s => s && s.getId() === soldier.getId());
        if (idx >= 0) {
            this.soldiers[idx].destroy();
            this.soldiers[idx] = undefined;
        }
    }

    var draw = function () {
        this.render();
        this.soldiers.forEach(s => s && s.render(this.$el));
    };

    return Object.assign(
        Object.create(El('arena')),
        {
            soldiers: [],
            toggle,
            remove,
            draw
        }
    );
}