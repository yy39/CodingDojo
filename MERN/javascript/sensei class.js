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

class Sensei extends Ninja {
    constructor(name) {
        super(name) // calling the constructor of the subclass
        this.wisdom = 10;
    }

    speakWisdom() {
        console.log("I am very wise an my wisdom is " + this.wisdom);
    }
}

const ninja1 = new Ninja("Hayabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Ryu");
sensei1.showStats();
sensei1.speakWisdom();