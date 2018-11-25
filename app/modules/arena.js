import El from './el.js';
import Soldier from './soldier.js';

export default function Arena() {

    var toggle = function (x, y) {
        var gridX = Math.floor(x / 50) * 50;
        var gridY = Math.floor(y / 50) * 50;
        var idx = ((gridY / 50) * 100) + (gridX / 50);
        console.log(this.soldiers[idx] && this.soldiers[idx].getId());
        if (this.soldiers[idx]) {
            this.remove(this.soldiers[idx]);
        }
        else {
            var soldier = Soldier().init();
            soldier.$el.style.left = `${gridX}px`;
            soldier.$el.style.top = `${gridY}px`;
            this.soldiers[idx] = soldier;
        }
    };

    var remove = function (soldier) {
        var idx = this.soldiers.findIndex(s => s && s.getId() === soldier.getId());
        if (idx >= 0) {
            let s = this.soldiers.splice(idx, 1)[0];
            s.destroy();
        }
    }

    var draw = function () {
        this.render();
        this.soldiers.forEach(s => s.render(this.$el));
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