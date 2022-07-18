class Person {
    constructor(n, age, id){
        this.name = n;
        this.age = age;
        this.pId = id;
    }

    showDetails(){
        console.log(`My Name is ${this.name}`);
    }
}

// let p1 = new Person("Ali", 30, 3456);
// p1.showDetails()

class Student extends Person {
    constructor(n, age, id, sem, field){
        super(n, age, id);
        this.semester = sem;
        this.fieldOfStudy = field;
    }

    showDetails(){
        console.log(`My Name is ${this.name}`);
    }
}


let std1 = new Student("Waqar", 12, 54321, "4th Semester", "IT");
console.log(std1.name);