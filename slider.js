function sliderFunc(){
    document.getElementById("controlDot").style.transform = "rotate("+document.getElementById("controlSlider").value * 30 + "deg)";
    document.getElementById("dotLights").style.backgroundImage = "url(images/dots_"+document.getElementById("controlSlider").value+".png)";
    resetAllHovers();
    selectHover();
}

function resetAllHovers(){
    var x = document.getElementsByClassName("bg_hover");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundImage = "";
    }
}

function selectHover(){
    temp = eval(document.getElementById("controlSlider").value) + 1;
    document.getElementById("hovers").style.backgroundImage = "url(images/hover_0" + temp + "-min.png)";
    if(document.getElementById("controlSlider").value == 6 || document.getElementById("controlSlider").value == 0 || document.getElementById("controlSlider").value == 1 || document.getElementById("controlSlider").value == 2){
        videoTemp = "images/connections_02.webm";
    }else{
        videoTemp = "images/connections_01.webm";
    }
    if(document.getElementById("hovers").querySelector("video").src.slice(-26) !== videoTemp){
        document.getElementById("hovers").querySelector("video").src = videoTemp;
    }
}