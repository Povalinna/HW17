function Car(brand,model,year,number)
    {
    this.brand = brand,
    this.model = model,
    this.year = year,
    this.number = number,
    
    this.setCarOwner = function(cOwner){
        if(cOwner.age > 18){
            this.carOwner = cOwner
        }
        else {console.log(`Sorry, your age is less than 18`)}
    }

    this.showCarInfo = function() {
        console.log(`Brend : ${this.brand} , Model : ${this.model} , Year :${this.year} , Number :${this.number} , `)
       this.carOwner.showPersonInfo();
    }
}
const firstCar = new Car(`Audi`,`A4`,2017, `AX 2018 AI`);
const secondCar = new Car (`BMW`, `X5`, 2020, `AA 3877 AA`);
const thirdCar = new Car(`VW`,`Passat`, 2021, `AE 6092 AA`);

firstCar.setCarOwner(firstPerson);
firstCar.showCarInfo();
console.log();
secondCar.setCarOwner(secondPerson);
secondCar.showCarInfo();
console.log();
thirdCar.setCarOwner(thirdPerson);
//thirdCar.showCarInfo();
console.log(`  `,thirdCar,thirdPerson);


