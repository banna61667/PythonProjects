class Car {
    constructor(brand, dealer) {
      this.carname = brand;
      this.dealer = dealer;
    }
  }

class House {
    constructor(family, color) {
        this.family = family;
        this.color = color;
    }

    getColor(){
        return this.color;
    }
}

  mycar = new Car("Ford", "Ikenna");
  console.log(mycar.dealer);
  console.log(mycar.getColor());