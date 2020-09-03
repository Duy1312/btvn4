import {Person} from "./Person.js"
class Students extends Person {
    constructor(name, gender, id, year, score) {
        super(name, gender);
        this.id = id;
        this.year = year;
        this.score = score;
    }
}

export{Students};