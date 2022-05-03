class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Name: " + this.name);
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health);
    }

    drinkSake() {
        console.log(this.name + " drank some sake.")
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hayabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();