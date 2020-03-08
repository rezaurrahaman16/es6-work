class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }

}

const student1= new Student(12,"Shuvo");
const student2= new Student(22,"Joy");
console.log(student1,student2);