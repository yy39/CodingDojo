class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

    isUnit(this) {
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
        if (target.isUnit()) {
            target.resilience -= this.power;
        }
    }
}

class Effect extends Card {
    constructor(name, cost, stat, mag) {
        super(name, cost);
        this.stat = stat;
        this.mag = mag;
    }

    play(target) {
        if (target.isUnit()) {
            switch (this.stat) {
                case "Resilience":
                    target.resilience += this.mag;
                case "Power":
                    target.power += this.mag;
            }
        }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
