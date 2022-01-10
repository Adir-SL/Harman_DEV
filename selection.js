function selectFunc(){
    // document.getElementById("cardDiv").querySelector("video").src = "images/card.webm";
    document.getElementById("blackDiv").style.opacity = "1";
    document.getElementById("cardDiv").querySelector("#glassCard").src = "images/card-min.png";
    document.getElementById("cardFlex").style.pointerEvents = "all";
    // document.getElementById("cardFlex").style.opacity = "1";
    document.getElementById("cardFlex").style.transform = "translateY(0)";
    // document.getElementById("cardDiv").style.backdropFilter = "blur(15px)";

    document.getElementsByClassName("prevBTN")[0].style.opacity = "0";
    document.getElementsByClassName("nextBTN")[0].style.opacity = "1";

    if(document.getElementById("controlSlider").value == "8"){
        document.getElementById("contentImg").style.backgroundImage = "url(images/campaign_01-min.png)";
        document.getElementById("contentImg").style.opacity = "1";
        nextCount = 3;
    }

    if(document.getElementById("controlSlider").value == "7"){
        document.getElementById("contentImg").style.backgroundImage = "url(images/vehicle_manage_01-min.png)";
        document.getElementById("contentImg").style.opacity = "1";
        nextCount = 2;
    }

    if(document.getElementById("controlSlider").value == "4"){
        document.getElementById("contentImg").style.backgroundImage = "url(images/SW_01-min.png)";
        document.getElementById("contentImg").style.opacity = "1";
        nextCount = 2;
    }
}

function veFunc(){
    // document.getElementById("cardDiv").querySelector("video").src = "images/card.webm";
    document.getElementById("cardDiv").querySelector("#glassCard").src = "images/card-min.png";
    document.getElementById("cardFlex").style.pointerEvents = "all";
    // document.getElementById("cardFlex").style.opacity = "1";
    document.getElementById("cardFlex").style.transform = "translateY(0)";
    // document.getElementById("cardDiv").style.backdropFilter = "blur(15px)";

    document.getElementsByClassName("prevBTN")[0].style.opacity = "0";
    document.getElementsByClassName("nextBTN")[0].style.opacity = "1";

    document.getElementById("contentImg").style.backgroundImage = "url(images/vehicle_01-min.png)";
    document.getElementById("contentImg").style.opacity = "1";
    nextCount = 4;
}

function resetFunc(){
    document.getElementById("hovers").style.backgroundImage = "url(images/hover_00-min.png)";
    document.getElementById("hovers").querySelector("video").src = "";
    document.querySelector(".dots").style.transform = "rotate(-55deg)";
    document.getElementById("dotLights").style.backgroundImage = "url(images/dots_none-min.png)";
}

function closeCard(){
    document.getElementById("cardFlex").style.transform = "translateY(110%)";
    document.getElementById("contentImg").style.opacity = "0";
    document.getElementById("cardFlex").style.pointerEvents = "none";
    document.getElementById("blackDiv").style.opacity = "0";
    tempCount = 0;
    checkBTNs();
    

    // setTimeout(function(){
    //     document.getElementById("cardDiv").style.backdropFilter = "blur(0)";
        
    //     document.getElementById("cardFlex").style.opacity = "0";
    // }, 500);
    // setTimeout(function(){
    //     document.getElementById("cardFlex").style.transform = "";
    //     document.getElementById("contentImg").style.backgroundImage = "";
    // }, 1000);
}

function prevCard(){
    tempCount = document.getElementById("contentImg").style.backgroundImage.slice(-11, -10);
    tempStart = document.getElementById("contentImg").style.backgroundImage.slice(0, -11);
    tempCount = eval(tempCount) - 1;

    if(tempCount > 0){
        document.getElementById("contentImg").style.backgroundImage = tempStart + tempCount + "-min.png";
    }

    checkBTNs();
}

function nextCard(){
    tempCount = document.getElementById("contentImg").style.backgroundImage.slice(-11, -10);
    tempStart = document.getElementById("contentImg").style.backgroundImage.slice(0, -11);
    tempCount = eval(tempCount) + 1;

    if(tempCount <= nextCount){
        document.getElementById("contentImg").style.backgroundImage = tempStart + tempCount + "-min.png";
    }

    checkBTNs();
}

function checkBTNs(){
    if(tempCount == 1){
        document.getElementsByClassName("prevBTN")[0].style.opacity = "0";
        document.getElementsByClassName("prevBTN")[0].style.pointerEvents = "none";
    }else{
        document.getElementsByClassName("prevBTN")[0].style.opacity = "1";
        document.getElementsByClassName("prevBTN")[0].style.pointerEvents = "all";
    }

    if(tempCount == nextCount){
        document.getElementsByClassName("nextBTN")[0].style.opacity = "0";
        document.getElementsByClassName("nextBTN")[0].style.pointerEvents = "none";
    }else{
        document.getElementsByClassName("nextBTN")[0].style.opacity = "1";
        document.getElementsByClassName("nextBTN")[0].style.pointerEvents = "all";
    }
}

function actBtnFunc(e){
    // alert(e);
    document.getElementById("controlSlider").value = e;
    sliderFunc();
}