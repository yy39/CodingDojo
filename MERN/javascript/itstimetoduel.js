class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    isUnit(target) {
        if (this instanceof Unit) {
            return true;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.resilience = res;
    }

    attack(target) {
        if (target.isUnit(target)) {
            target.resilience -= this.power;
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target) {
        if (target.isUnit(target)) {
            switch (this.stat) {
                case "resilience":
                    target.resilience += this.mag;
                    break;
                case "power":
                    target.power += this.mag;
                    break;
            }
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
hardAlgorithm.play(redBeltNinja);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);