import El from './el.js';

var NEXT_ID = 0;

export default function Soldier() {

    var id = NEXT_ID++;

    var getId = function() {
        return id;
    };

    return Object.assign(
        Object.create(El('soldier')),
        {
            getId
        }
    );
}