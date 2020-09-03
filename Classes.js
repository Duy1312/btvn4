import{Teachers} from "./Teachers.js"
import{Students} from "./Students.js"

class Classes {
    
    constructor(id, subjects, teachers) {
        this.id = id;
        this.subjects = subjects;
        this.teachers = teachers;
        this.students = [];
    }

    addStudent(student) {
        if(student instanceof Students) {
            this.students.push(student);
        } else { 
            return ;
        }
    }

    findStudent(name) {
        let findStudent = this.students.filter((finds) => {
            return finds.name === name;
        })
        return findStudent;
    }

    findScore(score) {
        let findScore = this.students.filter((findsc) => {
            return findsc.score >= 6;
        });
         
        return findScore;
    }
}

export{Classes}