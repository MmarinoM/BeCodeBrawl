let galleryChoice1 = [
    "assets/img/nick.png",
    "assets/img/nico.png",
    "assets/img/leny.png",
    "assets/img/student.png"
];
i =0;
ii = 0;

picP1 = document.getElementById("picP1");
picP2 = document.getElementById("picP2");


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



// confirm premiere phase
document.getElementById("CP1").addEventListener("click",function(){
    choiceCharacterP1 = "assets/img/"+document.getElementById("picP1").alt;
    alert("bonjour");
    let itemGallery = [
        choiceCharacterP1+"1.png",
        choiceCharacterP1+"2.png",
        choiceCharacterP1+"3.png",
        choiceCharacterP1+"4.png",
    ]
    i= 0;
    ii=0;    
    picP1.src = itemGallery[0];
    ;
    document.getElementById("CP1").id = "";
});


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
            CharInfo.innerHTML = "10% lifesteal from opponents current health at start of the vampire's turn.";
            break;
        case 2 :
            pic.alt = "leny";
            CharName.innerHTML = "Leny";
            CharInfo.innerHTML = "30% chance to reflect the attack back to the opponent. They take damage equal to 50% of the original hit.";
            
            break;
        case 3 :
            pic.alt = "student";
            CharName.innerHTML = "BeCode Student";
            CharInfo.innerHTML = "20% less damage taken";
            break;

    }
}