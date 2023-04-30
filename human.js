function Person(name,age) {
    this.name = name,
    this.age = age,

this.showPersonInfo = function(){
    console.log(`Name: ${this.name}  Age: ${this.age}`);
}
}
const firstPerson = new Person(`Mikle`,25) ;
const secondPerson = new Person(`Anna`, 40);
const thirdPerson = new Person(`Ben`,17);
console.log(firstPerson,secondPerson,thirdPerson );
