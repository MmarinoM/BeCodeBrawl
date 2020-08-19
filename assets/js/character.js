//add Math.floor pour les fonctions de calcul, afin de ne plus avoir de nombre décimal

class Character {
    constructor (item, tag) {
    this.name = name;
    this.item = item;
    this.currentHealth = 100;
    this.maxHealth = 100;
    
    this.minDamage = 3;
    this.maxDamage = 20;
    this.minHealing = 10;
    this.maxHealing = 30;

    this.isWinning = false;
    this.tag = tag;

    this.displayChar = function(){
        return `I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}.`;
    }
    }
}

class Student extends Character { 
    constructor (item, tag) {
        super(item, tag);
        this.name = "student";
        this.race = "student";
    }

    resistDamage (attack) 
    {
        let attackAmountToReduce = Math.floor(attack / 100 * 10);
        return attackAmountToReduce;
    }
}

class Nick extends Character {
    constructor (item, tag) {
        super(item, tag);
        this.name = "nick";
        this.race = "nick";
        this.maxHealth = this.maxHealth + Math.floor(this.maxHealth / 100 * 40);
    }
}

class Leny extends Character {
    constructor (item, tag) {
        super(item, tag);
        this.name = "leny";
        this.race = "leny";
    }

    reflectAttack (attacker, attack) {
        let  reflectAttackChance = randomize(0, 100);

        if (reflectAttackChance <= 19) {
            let reflectDamage = Math.floor(attack / 2);

            if(attacker.race == "student")
            {
                reflectDamage -= attacker.resistDamage(reflectDamage);
            }
            else if (attacker.item == "axe")
            {
                reflectDamage += randomize(attacker.min, attacker.maxDamage);
            }

            attacker.currentHealth -= reflectDamage;
            attack = 0;

            return attack;
        }
    }
}

class Nico extends Character {
    constructor (item, tag) {
        super(item, tag);
        this.name = "nico";
        this.race = "nico";
        this.maxHealth = Math.floor(this.maxHealth * 0.8);
    }

    drainLife (attacker, defender) {
        if (attacker.currentHealth < attacker.maxHealth)
        {
            let lifeDrained = Math.floor(defender.currentHealth / 100 * 10);

            attacker.currentHealth += lifeDrained;
            defender.currentHealth -= lifeDrained;

            if (attacker.currentHealth > attacker.maxHealth)
            {
                attacker.currentHealth = attacker.maxHealth;
            }

            return lifeDrained;
        }
    }
}

class Item {}

class Wings extends Item 
{
    static dodge() 
    {
        let dodgeChance = randomize(0, 30);

        if (dodgeChance <= 19)
        {
            return true;
        }
    }
}

class MagicStick extends Item 
{
    static increaseHealing(heal) 
    {
        let increasedHeal = heal + Math.floor(heal / 100 * 10);
        return increasedHeal;
    }

}

class Sword extends Item 
{
    static increaseDamage(damage) 
    {
        let damageAmountToAdd = Math.floor(damage / 100 * 20);
        return damageAmountToAdd;
    }

}

class Axe extends Item 
{
    static doubleAttack() 
    {
        let doubleAttackChance = randomize(0, 30);

        if (doubleAttackChance <= 19)
        {
            return true;
        }
    }
}

function randomize(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}