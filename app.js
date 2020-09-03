import{Students} from "./Students.js";
import{Teachers} from "./Teachers.js";
import{Classes} from "./Classes.js";

let class1 = new Classes( 'philosophy',"9084" );

let Tea1 = new Teachers('tran e', 'male', 'professor');
class1.newTeachers = Tea1

let stu1 = new Students('luffy', 'male', "20182828", '2019-2020', 10);
let stu2 = new Students('zoro', 'male', "20189349", '2019-2020', 6);
let stu3 = new Students('sanji', 'female', "20186262", '2019-2020', 8);
let stu4 = new Students('nami', 'male', "20189999", '2019-2020', 7);


class1.addStudent(stu1);
class1.addStudent(stu2);
class1.addStudent(stu3);
class1.addStudent(stu4);


console.log(class1.findScore());