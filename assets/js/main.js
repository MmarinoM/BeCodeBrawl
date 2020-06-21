class Character{

    //DAMAGE STUFF
    min = 3;
    maxDamage = 30;
    damageBoost = 0;
    maxDamageTaken = 1;
    damageTotal = 0;

    //HEALIN STUFF
    maxHealing = 30;
    minHealing = 10;
    boostHealing = 1;
    currenthealth = 100;
    maxHealth = 100;


    // SPECIAL CLASS OPTION
    reflect = 0;
    lifeSteal = 0;
    dodgeChance = 0.05;
    twiceHit = 0;



    constructor(race,item){
        this.race = race;
        this.item = item;
        this.name = race;
        
    
    

    this.heal = function(){
        console.log(this.currenthealth);
        let totalHeal =  Math.round(randFromRange([this.minHealing,this.maxHealing])*this.boostHealing);
        this.currenthealth = this.currenthealth + totalHeal;

        console.log("vie récuperée :"+totalHeal);
        addConsole("vie récuperée par "+this.name+" : "+totalHeal);
        

        if(this.currenthealth>=this.maxHealth){
            this.currenthealth = this.maxHealth;
        }
        console.log("vie restante"+this.currenthealth);
        addConsole("vie restante de"+this.name+" : "+this.currenthealth);


    };
    
     this.setRaceBoost = function(){
         switch(this.race){
             case 'student' : this.maxDamageTaken = this.maxDamageTaken*0.8;
                 break;
             case 'nick' : this.maxHealth = this.maxHealth * 1.4;
                          this.currenthealth = this.maxHealth;
                 break;
             case 'leny' : this.reflect = 0.3;
                 break;
             case 'nico' : this.lifeSteal = 0.10;
                 break;
        };
    };
     this.setObjetBoost = function(){
         switch(this.item){
             case 'wings' : this.dodgeChance = 0.3;
                break;
             case 'magic stick' : this.boostHealing = 1.2;
                 break;
             case 'sword' : this.damageBoost = 1.3;
                 break;
             case 'axe' : this.twiceHit = 0.3;
         }
     };
    this.damage = function(){
        let damage = randFromRange([this.min,this.maxDamage]);
        if (this.item == 'sword'){
            damage = Math.round(damage * this.damageBoost);
            this.damageTotal = damage;
        }
        else{
            this.damageTotal = Math.round(damage);
        }
        
    };

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };

    }
}
function randFromRange(range) {
    return Math.round(
        (Math.random() * (range[1] - range[0]) + range[0])
    ); //random between min - max included
}
function addConsole(montexte){
    tableConsole.push(montexte);
    var item = tableConsole[tableConsole.length-1];
    var elem = document.createElement("li");
    elem.innerHTML = item;
    // ulList.appendChild(elem);   
    ulList.prepend(elem);   
};
// CREATION DE LI 
let tableConsole = [];
let ulList = document.getElementById("ulList");
// lifebar
let lifeP1 = document.getElementById("remainLifeP1");
let lifeP2 = document.getElementById("remainLifeP2");


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
       game();
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
        game();
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
    
    



     // RANDOM POUR SAVOIR QUEL JOUEUR COMMENCE
     let playerTurn = Math.round(Math.random() + 1);
     if(playerTurn == 1){
         addConsole( player1.name+" commence");
     }else{
         addConsole( player2.name+" commence");
     }



     function setLife(playerAttack,playerDefense){
        let percentP1 = Math.round((playerAttack.currenthealth/playerAttack.maxHealth)*100);
        let percentP2 = Math.round((playerDefense.currenthealth/playerDefense.maxHealth)*100);
        if(playerAttack == player1){
            lifeP1.style.width = percentP1+"%";
            lifeP2.style.width = percentP2+"%";
        }else{
            lifeP1.style.width = percentP2+"%";
            lifeP2.style.width = percentP1+"%";
        }
        // PAS OUBLIER MODIF LIFEBAR
        if(lifeP1.value<70){
            lifeP1.className = "remainLife Orange";
            if(lifeP1.value<35){
                lifeP1.className = "remainLife Red";
            }
        }
        if(lifeP2.value<70){
            lifeP2.className = "remainLife Orange";
            if(lifeP2.value<35){
                lifeP2.className = "remainLife Red";
            }
        }
     
        
    
    }
    function endTurnP1(){
        if(player1.item == 'axe'){
            let randomHitTwice = Math.random();
            if(randomHitTwice <= player1.twiceHit){
                randomHitTwice = 1;
                console.log('hit twice!!!');
                addConsole(player1.name+" hit TWICEEE !!!");
                reflectElvesAndBoots(player1,player2);
                setLife(player1,player2);
            }else{
                addConsole(player1.name+" didn't attack twice...");
                attackButtonP1.disabled = true;
                healButtonP1.disabled = true;
                yieldButtonP1.disabled = true;
    
                attackButtonP2.disabled = false;
                healButtonP2.disabled = false;
                yieldButtonP2.disabled = false;
                setLife(player1,player2);
            }
        }else{
            attackButtonP1.disabled = true;
            healButtonP1.disabled = true;
            yieldButtonP1.disabled = true;
    
            attackButtonP2.disabled = false;
            healButtonP2.disabled = false;
            yieldButtonP2.disabled = false;
            setLife(player1,player2);
        }
       
    
        //LIFESTEAL
        if(player2.race == 'nico'){
            console.log("vie du PLAYER1 a la fin du tour : "+player1.currenthealth);
            console.log("vie du PLAYER2 a la fin du tour : "+player2.currenthealth);
            player1.currenthealth = player1.currenthealth - Math.round(player1.currenthealth*player2.lifeSteal);
            player2.currenthealth = player2.currenthealth + Math.round(player1.currenthealth*player2.lifeSteal);
            console.log("vie volée = "+Math.round(player1.currenthealth*player2.lifeSteal));
            addConsole("vie volée par "+player2.name+" = "+Math.round(player1.currenthealth*player2.lifeSteal));
            
            if(player1.currenthealth<=0){
                setLife(player1,player2);
                endGame();
                addConsole(player2.name+' WON !');
                
                
            }
            if(player2.currenthealth>=player2.maxHealth){
                player2.currenthealth = player2.maxHealth;
            }
            console.log('vie JOUEUR 1 debut du tour : '+player1.currenthealth);
            addConsole('vie de '+player1.name+' debut du tour : '+player1.currenthealth);
            console.log('vie JOUEUR 2 debut du tour : '+player2.currenthealth);
            addConsole('vie '+player2.name+' debut du tour : '+player2.currenthealth);
            setLife(player1,player2);
        }
        
    }
    function endTurnP2(){
        if(player2.item == 'axe'){
            let randomHitTwice = Math.random();
            if(randomHitTwice <= player2.twiceHit){
                randomHitTwice = 1;
                console.log('hit twice!!!!!!!!!');
                addConsole(player2.name+" hit TWICEEE !!!");
                reflectElvesAndBoots(player2,player1);
                setLife(player2,player1);
    
            }else{
                addConsole(player2.name+" didn't attack twice...");
                attackButtonP1.disabled = false;
                healButtonP1.disabled = false;
                yieldButtonP1.disabled = false;
                attackButtonP2.disabled = true;
                healButtonP2.disabled = true;
                yieldButtonP2.disabled = true;
                setLife(player2,player1);
    
            }
        }else{
            attackButtonP1.disabled = false;
            healButtonP1.disabled = false;
            yieldButtonP1.disabled = false;
            attackButtonP2.disabled = true;
            healButtonP2.disabled = true;
            yieldButtonP2.disabled = true;
            setLife(player2,player1);
        }
    
        //LIFESTEAL
        if(player1.race == 'nico'){
            console.log("vie du PLAYER2 a la fin du tour : "+player2.currenthealth);
            console.log("vie du PLAYER1 a la fin du tour : "+player1.currenthealth);
            player2.currenthealth = player2.currenthealth - Math.round(player2.currenthealth*player1.lifeSteal);
            player1.currenthealth = player1.currenthealth + Math.round(player2.currenthealth*player1.lifeSteal);
            console.log("vie volée = "+Math.round(player2.currenthealth*player1.lifeSteal));
            addConsole("vie volée = "+Math.round(player2.currenthealth*player1.lifeSteal));
            
            if(player2.currenthealth<=0){
                endGame();
                addConsole(player1.name+' WON !!!');
                setLife(player2,player1);
            }
            if(player1.currenthealth>=player1.maxHealth){
                player1.currenthealth = player1.maxHealth;
            }
            console.log('vie JOUEUR 2 debut du tour : '+player2.currenthealth);
            addConsole('vie'+playe2.name+'debut du tour : '+player2.currenthealth);
            console.log('vie JOUEUR 1 debut du tour : '+player1.currenthealth);
            addConsole('vie '+player1.name+'debut du tour : '+player1.currenthealth);
            setLife(player2,player1);
        }
    }
    function endGame(){
        
        attackButtonP1.style.display = "none";
        attackButtonP2.style.display = "none";
        healButtonP1.style.display = "none";
        healButtonP2.style.display = "none";
        yieldButtonP1.style.display = "none";
        yieldButtonP2.style.display = "none";
        
        
    }
}
















































function switchIMG(i,idpic,idh2,idp){
    pic= document.getElementById(idpic);
    CharName = document.getElementById(idh2);
    CharInfo = document.getElementById(idp);
    switch(i){
        case 0 :
            pic.alt = "nick";
            CharName.innerHTML = "Nick";
            CharInfo.innerHTML = "40% more Health";

            break;
        case 1 :
            pic.alt = "nico";
            CharName.innerHTML = "Nico";
            CharInfo.innerHTML = "10% lifesteal at start of his turn.";
            break;
        case 2 :
            pic.alt = "leny";
            CharName.innerHTML = "Leny";
            CharInfo.innerHTML = "30% chance to reflect 50% of the attack back to the opponent.";
            
            break;
        case 3 :
            pic.alt = "student";
            CharName.innerHTML = "BeCode Student";
            CharInfo.innerHTML = "20% less damage taken";
            break;

    }
}