import El from './el.js';

export default function Arena() {

    var add = function (soldier) {
        this.soldiers.push(soldier);
    };

    var remove = function (soldier) {
        var idx = this.soldiers.findIndex(s => s.getId() === soldier.getId());
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
            add,
            remove,
            draw
        }
    );
}