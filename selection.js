function checkFlows(){
    checkMe = document.getElementById("controlSlider").value;
    if(checkMe == "0"){
        document.getElementById("selectText").innerText = "SIGNING";
    }
    if(checkMe == "1"){
        document.getElementById("selectText").innerText = "HA / LB";
    }
    if(checkMe == "2"){
        document.getElementById("selectText").innerText = "DISTRIBUTION";
    }
    if(checkMe == "3"){
        document.getElementById("selectText").innerText = "PRODUCT DATA";
    }
    if(checkMe == "4"){
        document.getElementById("selectText").innerText = "SW MANAGEMENT";
    }
    if(checkMe == "5"){
        document.getElementById("selectText").innerText = "DATA LAKE";
    }
    if(checkMe == "6"){
        document.getElementById("selectText").innerText = "UPDATE GENERATION";
    }
    if(checkMe == "7"){
        document.getElementById("selectText").innerText = "VEHICLE MANAGEMENT";
    }
    if(checkMe == "8"){
        document.getElementById("selectText").innerText = "CAMPAIGN MANAGEMENT";
    }

    if(checkMe == "8" || checkMe == "7" || checkMe == "5" || checkMe == "4"){
        document.querySelectorAll(".controlBtn")[1].classList.add("glow");
    }else{
        document.querySelectorAll(".controlBtn")[1].classList.remove("glow");
    }
}
function selectFunc(){
    document.getElementById("blackDiv").style.opacity = "0.8";
    document.getElementById("cardDiv").querySelector("#glassCard").src = "images/card-min.png";
    document.getElementById("cardFlex").style.pointerEvents = "all";
    document.getElementById("cardFlex").style.transform = "translateY(0)";

    document.getElementsByClassName("prevBTN")[0].classList.add("disabled");
    document.getElementsByClassName("nextBTN")[0].classList.remove("disabled");

    if(document.getElementById("controlSlider").value == "8"){
        document.getElementById("contentImg").style.backgroundImage = "url(images/campaign_01-min.png)";
        document.getElementById("contentImg").style.opacity = "1";
        nextCount = 3;
        checkCards();
    }

    if(document.getElementById("controlSlider").value == "7"){
        document.getElementById("contentImg").style.backgroundImage = "url(images/vehicle_manage_01-min.png)";
        document.getElementById("contentImg").style.opacity = "1";
        nextCount = 2;
        checkCards();
    }

    if(document.getElementById("controlSlider").value == "5"){
        document.getElementById("contentImg").style.backgroundImage = "url(images/data_lake_01-min.png)";
        document.getElementById("contentImg").style.opacity = "1";
        nextCount = 0;
        checkCards();
    }

    if(document.getElementById("controlSlider").value == "4"){
        document.getElementById("contentImg").style.backgroundImage = "url(images/SW_01-min.png)";
        document.getElementById("contentImg").style.opacity = "1";
        nextCount = 2;
        checkCards();
    }
}

function veFunc(){
    document.getElementById("blackDiv").style.opacity = "0.8";
    document.getElementById("cardDiv").querySelector("#glassCard").src = "images/card-min.png";
    document.getElementById("cardFlex").style.pointerEvents = "all";
    document.getElementById("cardFlex").style.transform = "translateY(0)";
    document.getElementsByClassName("prevBTN")[0].classList.add("disabled");
    document.getElementsByClassName("nextBTN")[0].classList.remove("disabled");

    document.getElementById("contentImg").style.backgroundImage = "url(images/vehicle_01-min.png)";
    document.getElementById("contentImg").style.opacity = "1";
    nextCount = 5;
}

function resetFunc(){
    document.getElementById("selectText").innerText = "SELECT";
    document.getElementById("hovers").style.backgroundImage = "url(images/hover_00-min.png)";
    document.getElementById("hovers").querySelector("video").src = "";
    document.querySelector(".dots").style.transform = "scale(0.9) translate(-1%,28%) rotate(-55deg)";
    document.getElementById("dotLights").style.backgroundImage = "url(images/dots_none-min.png)";
}

function closeCard(){
    document.getElementById("cardFlex").style.transform = "translateY(110%)";
    document.getElementById("contentImg").style.opacity = "0";
    document.getElementById("cardFlex").style.pointerEvents = "none";
    document.getElementById("blackDiv").style.opacity = "0";
    tempCount = 0;
    checkBTNs();
    
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
function checkCards(){
    if(nextCount < 2){
        document.getElementsByClassName("prevBTN")[0].classList.add("disabled");
        document.getElementsByClassName("nextBTN")[0].classList.add("disabled");
    }
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
        document.getElementsByClassName("prevBTN")[0].classList.add("disabled");
    }else{
        document.getElementsByClassName("prevBTN")[0].classList.remove("disabled");
    }

    if(tempCount == nextCount){
        document.getElementsByClassName("nextBTN")[0].classList.add("disabled");
    }else{
        document.getElementsByClassName("nextBTN")[0].classList.remove("disabled");
    }
}

function actBtnFunc(e){
    document.getElementById("controlSlider").value = e;
    sliderFunc();
}