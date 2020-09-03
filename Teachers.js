import {Person} from "./Person.js"

class Teachers extends Person {
    constructor (name, gender, rank) {
        super(name, gender);
        this.rank = rank;
    }

}
export {Teachers}