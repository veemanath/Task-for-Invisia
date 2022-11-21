
var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate")
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate")
    }
}



function hover() {
    document.getElementById('overlay').src="images/png/overlay1.png"
}
  
function unhover() {
    document.getElementById('overlay').src="images/png/overlay2.png"
}

function hover1() {
    document.getElementById('overlay1').src="images/png/overlay1.png"
}
  
function unhover1() {
    document.getElementById('overlay1').src="images/png/overlay2.png"
}

function hover2() {
    document.getElementById('overlay2').src="images/png/overlay1.png"
}
  
function unhover2() {
    document.getElementById('overlay2').src="images/png/overlay2.png"
}

function hover3() {
    document.getElementById('overlay3').src="images/png/overlay1.png"
}
  
function unhover3() {
    document.getElementById('overlay3').src="images/png/overlay2.png"
}

function hover4() {
    document.getElementById('overlay4').src="images/png/overlay1.png"
}
  
function unhover4() {
    document.getElementById('overlay4').src="images/png/overlay2.png"
}

function hover5() {
    document.getElementById('overlay5').src="images/png/overlay1.png"
}
  
function unhover5() {
    document.getElementById('overlay5').src="images/png/overlay2.png"
}

function hover6() {
    document.getElementById('overlay6').src="images/png/overlay1.png"
}
  
function unhover6() {
    document.getElementById('overlay6').src="images/png/overlay2.png"
}

function hover7() {
    document.getElementById('overlay7').src="images/png/overlay1.png"
}
  
function unhover7() {
    document.getElementById('overlay7').src="images/png/overlay2.png"
}
