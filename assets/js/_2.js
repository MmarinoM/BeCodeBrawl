
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
    }
   
    
});



// reprendre ces infos et injecter dans mon code
function game(){

    // création Players
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
         addConsole( player1.name+" start");
     }else{
         addConsole( player2.name+" start");
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