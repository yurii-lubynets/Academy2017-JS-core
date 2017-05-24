class Fighter {
    constructor(name = "defaultName", power = 0, health  = 0) {
        this._name = name;
        this._power = power;
        this._health = health;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if(newName){
            this._name = newName;
        }
    }

    get power() {
        return this._power;
    }

    set power(newPower) {
        if(newPower >= 0){
            this._power = newPower;
        }
    }

    get health() {
        return this._health;
    }

    set health(newHealth) {
        if(newHealth >= 0){
            this._health = newHealth;
        }
    }

    setDamage(damage = 0) {
        return console.log(`health: ${this.health = this.health - damage > 0 ? this.health - damage : 0}`);
    }

    hit(enemy = {}, point = 0) {
        let damage = point*this.power;
        enemy.setDamage(damage);
    }

}

class ImprovedFighter extends Fighter {
    doubleHit(enemy = {}, point = 0){
        super.hit(enemy, 2*point);
    }

}

const fight = (fighter = new Fighter(), improvedFighter = new ImprovedFighter(), ...points) => {
    if (points.length === 0) {
        console.log('points length is null');
        return;
    }

    let round = true;

    for (let i = 0; i < points.length; i++) {
        round ? fighter.hit(improvedFighter, points[i]) : improvedFighter.hit(fighter, points[i]);
        /*round ? fighter.hit(improvedFighter, points[i]) : improvedFighter.doubleHit(fighter, points[i]);*/
        if (fighter.health === 0 || improvedFighter.health === 0) {
            let fighterWinner = round ? fighter.name : improvedFighter.name;
            return console.log(`${fighterWinner} wins.`);
        }
        round = !round;
    }

};

let fighter = new Fighter("first fighter", 10, 100);
let improvedFighter = new ImprovedFighter("second fighter", 10, 100);

fight(fighter, improvedFighter, 1, 2, 3, 4, 5, 6, 7, 8, 9);