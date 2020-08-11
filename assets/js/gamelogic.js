//import * as Character from "./character.js";

//

// code de Michael à intégrer pour sélection perso

//



// Début jeu
// Supprimer fonctions création de perso et de stats


    // VARIABLES GLOBALES
const buttonsPlayer1 = [document.getElementById("attackP1"), 
    document.getElementById("healP1"),
    document.getElementById("yieldP1")
    ];
const buttonsPlayer2 = [document.getElementById("attackP2"), 
    document.getElementById("healP2"),
    document.getElementById("yieldP2")
    ];

const healthPlayer1 = document.getElementById("remainLifeP1");
const healthPlayer2 = document.getElementById("remainLifeP2");

let tableConsole = [];
const logElement = document.getElementById("ulList");


(function main() {

    // COEUR DU PROGRAMME

    document.getElementById("startButton").addEventListener("click", () =>
    {
        if(nameInput1.value === "" || nameInput2.value === "")
        {
            alert("You need to choose names for your players!");
        }
        else
        {

            const player1 = createPlayer(
                document.getElementById("nameInput1"), 
                document.getElementById("raceInput1"),
                document.getElementById("itemInput1"),
                document.getElementById("idPlayer1")
                );

            const player2 = createPlayer(
                document.getElementById("nameInput2"), 
                document.getElementById("raceInput2"),
                document.getElementById("itemInput2"),
                document.getElementById("idPlayer2")
                );

            createPlayerStats(player1, 
                document.getElementById("player1NameBox"),
                document.getElementById("player1RaceBox"),
                document.getElementById("player1ItemBox"),
                document.getElementById("player1HpGauge"));

            createPlayerStats(player2, 
                document.getElementById("player2NameBox"),
                document.getElementById("player2RaceBox"),
                document.getElementById("player2ItemBox"),
                document.getElementById("player2HpGauge"));
        
            document.getElementById("startScreen").style.display = "none";
            document.getElementById("gameScreen").style.display = "grid";

            if(determinateFirstTurn(player1, player2) == "player1")
            {
                disableButtons(buttonsPlayer2);
                enableButtons(buttonsPlayer1);
            }
            else
            {
                disableButtons(buttonsPlayer1);
                enableButtons(buttonsPlayer2);
            }

            buttonsPlayer1[0].addEventListener("click", () => {
                attackButton(player1, player2);
                disableButtons(buttonsPlayer1);
                enableButtons(buttonsPlayer2);
            });

            buttonsPlayer1[1].addEventListener("click", () => {
                healButton(player1);
                disableButtons(buttonsPlayer1);
                enableButtons(buttonsPlayer2);
            });

            buttonsPlayer1[2].addEventListener("click", () => {
                yieldButton(player1, player2);
                disableButtons(buttonsPlayer1);
                enableButtons(buttonsPlayer2);
            });

            buttonsPlayer2[0].addEventListener("click", () => {
                attackButton(player2, player1);
                disableButtons(buttonsPlayer2);
                enableButtons(buttonsPlayer1);
            });

            buttonsPlayer2[1].addEventListener("click", () => {
                healButton(player2);
                disableButtons(buttonsPlayer2);
                enableButtons(buttonsPlayer1);
            });

            buttonsPlayer2[2].addEventListener("click", () => {
                yieldButton(player2, player1);
                disableButtons(buttonsPlayer2);
                enableButtons(buttonsPlayer1);
            });
        }
    });
})();

    // PROTOTYPES DE FONCTIONS

    function createPlayer(nameInput, raceInput, itemInput, idPlayer)
    {
        let playerName = nameInput.value;
        let raceChoice = raceInput.value;
        let itemChoice = itemInput.value;
        let playerId = idPlayer.dataset.player;
        let player = {};

        switch(raceChoice)
        {
            case "human":
                player = new Human(playerName, itemChoice, playerId);
                addToLog(player.displayChar());
                return player; 
                break;
            case "orc":
                player = new Orc(playerName, itemChoice, playerId);
                addToLog(player.displayChar());
                return player;
                break;
            case "elf":
                player = new Elf(playerName, itemChoice, playerId);
                addToLog(player.displayChar());
                return player;
                break;
            case "vampire":
                player = new Vampire(playerName, itemChoice, playerId);
                addToLog(player.displayChar());
                return player;
                break;    
        }
    }

    function createPlayerStats(player, nameBox, raceImage, itemImage, hpGauge)
    {
        const raceImagesArr = [
        "assets/img/nick.png",
        "assets/img/nico.png",
        "assets/img/leny.png",
        "assets/img/student.png"];

        const itemImagesArr = ["assets/img/boots.png", 
        "assets/img/staff.svg", 
        "assets/img/sword.svg", 
        "assets/img/bow.svg"];

        nameBox.innerHTML = player.name;
        hpGauge.max = player.maxHealth;
        player.currentHealth = player.maxHealth;
        hpGauge.value = player.currentHealth;

        switch(player.race)
        {
            case "human":
                raceImage.src = raceImagesArr[0];
                break;
            case "orc":
                raceImage.src = raceImagesArr[1];
                break;
            case "elf":
                raceImage.src = raceImagesArr[2];
                break;
            case "vampire":
                raceImage.src = raceImagesArr[3];
                break;
        }
        
        switch(player.item)
        {
            case "boots":
                itemImage.src = itemImagesArr[0];
                break;
            case "staff":
                itemImage.src = itemImagesArr[1];
                break;
            case "sword":
                itemImage.src = itemImagesArr[2];
                break;
            case "bow":
                itemImage.src = itemImagesArr[3];
                break;
        }
    }

    function determinateFirstTurn(player1, player2)
    {
        let chance = Math.floor(Math.random() * 100);

        if (chance <= 49)
        {
            addToLog(`It's ${player1.name}'s turn.`);
            return "player1";
        }
        else
        {
            addToLog(`It's ${player2.name}'s turn.`);
            return "player2";
        }
    }

    function enableButtons(buttonsArr)
    {
        buttonsArr.forEach(element => {
            element.disabled = false;
        });
    }

    function disableButtons(buttonsArr)
    {
        buttonsArr.forEach(element => {
            element.disabled = true;
        });
    }

    function gameOver(attacker, defender)
    {
        if(attacker.isWinning)
        {
            alert(`Congratulations! ${attacker.name} won!
            Too bad! ${defender.name} lost!`);
        } 
        else if(defender.isWinning)
        {
            alert(`Congratulations! ${defender.name} won!
            Too bad! ${attacker.name} lost!`);
        }

        restartGame();
    }

    function restartGame() 
    {
        let answer = confirm("Do you wish to play again?");

        if(answer)
        {
            alert("Here we go again! Let's pick a character to play !");
            document.getElementById("startScreen").style.display = "grid";
            document.getElementById("gameScreen").style.display = "none";
        } else
        {
            alert("Too bad, see you next time!");
            document.getElementById("startScreen").style.display = "grid";
            document.getElementById("gameScreen").style.display = "none";
        }
    }

    function addToLog(newLog) {
        tableConsole.push(newLog);
        let lastLog = tableConsole[tableConsole.length-1];
        var liElement = document.createElement("li");
        liElement.innerHTML = lastLog;  
        logElement.prepend(elem); 

        // Ou plus simplement (test si ça fonctionne)
        //logElement.innerHTML += `${newLog}\n`;
    }

    function randomize(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function attackButton(attacker, defender)
    {
        let attackDamage = randomize(attacker.min, attacker.maxDamage);
        let drainedLife = 0;
        let hasReflected = 0;

        switch(attacker.race)
        {
            case "vampire":
                drainedLife = attacker.drainLife(attacker, defender);
                addToLog(`${attacker.name} has drained ${drainedLife} HP from ${defender.name}.`);
                updateHealth(attacker, defender);
                break;
            default:
                break;
        }

        switch(defender.race)
        {
            case "human":
                attackDamage -= defender.resistDamage(attackDamage);
                addToLog(`${defender.name} is a human and take less damage!`);
                break;
            case "elf":
                attackDamage = defender.reflectAttack(attacker, attackDamage);
                if(attackDamage == 0)
                {
                    addToLog(`${defender.name} has reflect the attack and taken no damage!`);
                    updateHealth(attacker, defender);
                    hasReflected = 1;
                }
                break;
            default:
                break;
        }

        switch(attacker.item)
        {
            case "sword":
                if(attackDamage != 0)
                {
                    attackDamage += Sword.increaseDamage(attackDamage);
                    addToLog(`${attacker.name} has inflicted more damage!`);
                }
                break;
            case "bow":
                if(Bow.doubleAttack() && attackDamage != 0)
                {
                    attackDamage += randomize(attacker.min, attacker.maxDamage);
                    addToLog(`${attacker.name} has shot two arrows!`);
                }
                break;
            default:
                break;
        }

        switch(defender.item)
        {
            case "boots":
                if(Boots.dodge() && (hasReflected == 0))
                {
                    attackDamage = 0;
                    addToLog(`${defender.name} has dodged the attack!`);
                    hasDodged = 1;
                }
                break;
            default:
                break;
        }

        defender.currentHealth -= attackDamage;
        addToLog(`${attacker.name} has attacked and ${defender.name} has lost ${attackDamage} HP.`);

        updateHealth(attacker, defender);
    }

    function healButton(target)
    {
        let healthPointsHealed = randomize(target.min, target.maxHealing);

        if (target.item == "staff")
        {
            healthPointsHealed = Staff.increaseHealing(healthPointsHealed);
        }

        if (target.currentHealth < target.maxHealth)
        {
            target.currentHealth += healthPointsHealed;
            addToLog(`${target.name} have regained ${healthPointsHealed}. You have ${target.currentHealth}/${target.maxHealth} HP.`);

            if (target.currentHealth > target.maxHealth)
            {
                target.currentHealth = target.maxHealth;
            }
        }
        else
        {
            addToLog(`Your life is already full!`);
        }
    }

    function yieldButton(target, otherPlayer)
    {
        let isForfeit = confirm("Do you wish to leave the game?");

        if (isForfeit)
        {
            target.isWinning = false;
            gameOver(target, otherPlayer);
        } else 
        {
            alert("Keep on fighting! You can do this!");
        }
    }


    function updateHealth(attacker, defender)
    {
        if(attacker.tag == "player1" && defender.tag == "player2")
        {
            healthPlayer1.value = (Math.floor(attacker.currentHealth)).toString();
            healthPlayer2.value = (Math.floor(defender.currentHealth)).toString();
        }
        else
        {
            healthPlayer1.value = (Math.floor(defender.currentHealth)).toString();
            healthPlayer2.value = (Math.floor(attacker.currentHealth)).toString();
        }
        
        addToLog(`${attacker.name} has ${attacker.currentHealth} left.`);
        addToLog(`${defender.name} has ${defender.currentHealth} left.`);

        if (attacker.currentHealth <= 0)
        {
            attacker.currentHealth = 0;
            addToLog(`${attacker.name} is dead.`);

            attacker.isWinning = false;
            defender.isWinning = true;

            gameOver(attacker, defender);
        }
        else if (defender.currentHealth <= 0)
        {
            defender.currentHealth = 0;
            addToLog(`${defender.name} is dead.`);

            attacker.isWinning = true;
            defender.isWinning = false;

            gameOver(attacker, defender);
        }
    }