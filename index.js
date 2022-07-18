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

let p1 = new Person("Ali", 30, 3456);
console.log(p1.name);

let p2 = new Person();
p2.name = "Usama";
console.log(p2);
