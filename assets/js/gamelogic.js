//import * as Character from "./character.js";

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

// Sélection personnages

let galleryChoice1 = [
    "assets/img/nick.png",
    "assets/img/nico.png",
    "assets/img/leny.png",
    "assets/img/student.png"
];
i =0;
ii = 2;
// VARIABLE POUR APRES PREMIER CONFIRM
let player1ChoiceRace;
let player1ChoiceItem;
let player2ChoiceRace;
let player2ChoiceItem;
let itemGallery = [];
let itemGalleryP2 = [];
let attackButtonP1 = document.getElementById("attackP1");
let attackButtonP2 = document.getElementById("attackP2");
let healButtonP1 = document.getElementById("healP1");
let healButtonP2 = document.getElementById("healP2");
let yieldButtonP1 = document.getElementById("yieldP1");
let yieldButtonP2 = document.getElementById("yieldP2");

//
picP1 = document.getElementById("picP1");
picP2 = document.getElementById("picP2");
document.getElementById("rightP1item").style.display ="none";
document.getElementById("rightP2item").style.display ="none";
document.getElementById("leftP1item").style.display ="none";
document.getElementById("leftP2item").style.display ="none";


document.getElementById("rightP1").addEventListener("click",function(){
    i++;
    if(i == galleryChoice1.length){
        i=0;
    }
    picP1.src = galleryChoice1[i];
    

    switchIMG(i,"picP1","charNameP1","charInfoP1");
});
document.getElementById("leftP1").addEventListener("click",function(){
    i--;
    if(i < 0){
        i=3;
    }
    picP1.src = galleryChoice1[i];
   switchIMG(i,"picP1","charNameP1","charInfoP1");
    
    
    console.log(i);
});
document.getElementById("rightP2").addEventListener("click",function(){
    ii++;
    if(ii == galleryChoice1.length){
        ii=0;
    }
    picP2.src = galleryChoice1[ii];
    switchIMG(ii,"picP2","charNameP2","charInfoP2");
    
    
    
});
document.getElementById("leftP2").addEventListener("click",function(){
    ii--;
    if(ii < 0){
        ii=3;
    }
    picP2.src = galleryChoice1[ii];
    switchIMG(ii,"picP2","charNameP2","charInfoP2");
    
    
    console.log(i);
});
document.getElementById("leftP1item").addEventListener("click",function(){
    i--;
    if(i < 0){
        i=3;
    }
    picP1.src = itemGallery[i];
    console.log(i);
    console.log(itemGallery);
    itemNameP1 = document.getElementById("itemNameP1");
    switch(i){
        case 0 :
            itemP1info.innerHTML = "30% chance to dodge an attack";
            itemNameP1.innerHTML = "Wings";
            
        break;
        case 1 :
            itemP1info.innerHTML = "30% chance to attack twice";
            itemNameP1.innerHTML = "Axe";
        break;
        case 2 :
            itemP1info.innerHTML = "30% more damage";
            itemNameP1.innerHTML = "Sword";
        break;
        case 3 :
            itemP1info.innerHTML = "20% increase in healing";
            itemNameP1.innerHTML = "Magic Stick";
        break;
    };
});
document.getElementById("leftP2item").addEventListener("click",function(){
    ii--;
    if(ii < 0){
        ii=3;
    }
    picP2.src = itemGalleryP2[ii];
    console.log(ii);
    console.log(itemGallery);
    itemNameP2 = document.getElementById("itemNameP2");
    switch(ii){
        case 0 :
            itemP2info.innerHTML = "30% chance to dodge an attack";
            itemNameP2.innerHTML = "Wings";
            
        break;
        case 1 :
            itemP2info.innerHTML = "30% chance to attack twice";
            itemNameP2.innerHTML = "Axe";
        break;
        case 2 :
            itemP2info.innerHTML = "30% more damage";
            itemNameP2.innerHTML = "Sword";
        break;
        case 3 :
            itemP2info.innerHTML = "20% increase in healing";
            itemNameP2.innerHTML = "Magic Stick";
        break;
    };
});
document.getElementById("rightP1item").addEventListener("click",function(){
    i++;
    if(i == itemGallery.length){
        i=0;
    }
    picP1.src = itemGallery[i];
    switch(i){
        case 0 :
            itemP1info.innerHTML = "30% chance to dodge an attack";
            itemNameP1.innerHTML = "Wings";
            
        break;
        case 1 :
            itemP1info.innerHTML = "30% chance to attack twice";
            itemNameP1.innerHTML = "Axe";
        break;
        case 2 :
            itemP1info.innerHTML = "30% more damage";
            itemNameP1.innerHTML = "Sword";
        break;
        case 3 :
            itemP1info.innerHTML = "20% increase in healing";
            itemNameP1.innerHTML = "Magic Stick";
        break;
    };
    
});
document.getElementById("rightP2item").addEventListener("click",function(){
    ii++;
    if(ii == itemGalleryP2.length){
        ii=0;
    }
    picP2.src = itemGalleryP2[ii];
    switch(ii){
        case 0 :
            itemP2info.innerHTML = "30% chance to dodge an attack";
            itemNameP2.innerHTML = "Wings";
            
        break;
        case 1 :
            itemP2info.innerHTML = "30% chance to attack twice";
            itemNameP2.innerHTML = "Axe";
        break;
        case 2 :
            itemP2info.innerHTML = "30% more damage";
            itemNameP2.innerHTML = "Sword";
        break;
        case 3 :
            itemP2info.innerHTML = "20% increase in healing";
            itemNameP2.innerHTML = "Magic Stick";
        break;
    };
    
});


// confirm premiere phase
document.getElementById("CP1").addEventListener("click",function(){  
    document.getElementById("rightP1").style.display = "none";
    document.getElementById("leftP1").style.display = "none";
    document.getElementById("CP1").style.display = "none";
    document.getElementById("CP1item").style.display = "block";
    document.getElementById("leftP1item").style.display = "flex";
    document.getElementById("rightP1item").style.display = "flex";
    
    choiceCharacterP1 = "assets/img/"+document.getElementById("picP1").alt;
    console.log(choiceCharacterP1);
    itemGallery = [
        choiceCharacterP1+"1.png",
        choiceCharacterP1+"2.png",
        choiceCharacterP1+"3.png",
        choiceCharacterP1+"4.png",
    ];
    i= 0;
     
    picP1.src = itemGallery[0];
    
    itemP1info = document.getElementById("charInfoP1item");
    itemP1info.innerHTML = "30% chance to dodge an attack";
    itemNameP1.innerHTML = "Wings";
    
    
});
document.getElementById("CP2").addEventListener("click",function(){  
    document.getElementById("rightP2").style.display = "none";
    document.getElementById("leftP2").style.display = "none";
    document.getElementById("CP2").style.display = "none";
    document.getElementById("CP2item").style.display = "block";
    document.getElementById("leftP2item").style.display = "flex";
    document.getElementById("rightP2item").style.display = "flex";
    
    choiceCharacterP2 = "assets/img/"+document.getElementById("picP2").alt;
    console.log(choiceCharacterP2);
    itemGalleryP2 = [
        choiceCharacterP2+"1.png",
        choiceCharacterP2+"2.png",
        choiceCharacterP2+"3.png",
        choiceCharacterP2+"4.png",
    ];
    
    ii=0;    
    picP2.src = itemGalleryP2[0];
    itemP2info = document.getElementById("charInfoP2item");
    itemP2info.innerHTML = "30% chance to dodge an attack";
    itemNameP2.innerHTML = "Wings";
    
    
});


//variable qui démarre la game 
let start = 0;

document.getElementById("CP1item").addEventListener("click",function(){
    start++;
    document.getElementById("charInfoP1").style.display = "none";
    document.getElementById("charInfoP1").style.display = "none";
    document.getElementById("itemNameP1").style.display = "none";
    document.getElementById("charInfoP1item").style.display = "none";
    document.getElementById("leftP1item").style.display = "none";
    document.getElementById("rightP1item").style.display = "none";
    document.getElementById("CP1item").style.display = "none";
    player1ChoiceRace = document.getElementById("picP1").alt;
    player1ChoiceItem = document.getElementById("itemNameP1").innerText;
    console.log(player1ChoiceRace);
    console.log(player1ChoiceItem);
   if(start == 2){
       document.getElementById("buttonGroup").style.display = "flex";
       document.getElementById("lifeBarP1").style.display = "block";
       document.getElementById("lifeBarP2").style.display = "block";
       document.getElementById("ulList").style.display = "block";
       document.getElementById("logo").style.display = "none";
       
       game();
       // faire popper bouton start
   }
    
});
document.getElementById("CP2item").addEventListener("click",function(){
    start++;
    document.getElementById("charInfoP2").style.display = "none";
    document.getElementById("charInfoP2").style.display = "none";
    document.getElementById("itemNameP2").style.display = "none";
    document.getElementById("charInfoP2item").style.display = "none";
    document.getElementById("leftP2item").style.display = "none";
    document.getElementById("rightP2item").style.display = "none";
    document.getElementById("CP2item").style.display = "none";
    player2ChoiceRace = document.getElementById("picP2").alt;
    player2ChoiceItem = document.getElementById("itemNameP2").innerText;
    console.log(player2ChoiceRace);
    console.log(player2ChoiceItem);
    if(start == 2){
        document.getElementById("buttonGroup").style.display = "flex";
        document.getElementById("lifeBarP1").style.display = "block";
        document.getElementById("lifeBarP2").style.display = "block";
        document.getElementById("ulList").style.display = "block";
        document.getElementById("logo").style.display = "none";
        
        game();
        // faire popper bouton start
    }

});

function game(){
    console.log(player1ChoiceItem);
    console.log(player1ChoiceRace);
    let player1 = new Character(player1ChoiceRace,player1ChoiceItem);
    player1.setObjetBoost();
    player1.setRaceBoost();
    
    
    let player2 = new Character(player2ChoiceRace,player2ChoiceItem);
    player2.setObjetBoost();
    player2.setRaceBoost();
    
    }
/*

// Début jeu
// Supprimer fonctions création de perso et de stats


(function main() {

    // COEUR DU PROGRAMME

    document.getElementById("startButton").addEventListener("click", () =>
    {
        // Création des joueurs
        const player1 = createPlayer(player1ChoiceRace, player1ChoiceItem, "player1");
        const player2 = createPlayer(player2ChoiceRace,player2ChoiceItem, "player2");

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
})();

    // PROTOTYPES DE FONCTIONS

    function createPlayer(raceInput, itemInput, idPlayer)
    {
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
    }*/