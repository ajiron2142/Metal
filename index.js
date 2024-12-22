//Variables
const audioElements = document.querySelectorAll('audio');

//Pause all audio elements when called
function holdUp() {
    for (let i = 0; i < audioElements.length; i++){
        audioElements[i].pause();
    }
}

//Makes dancing cat gif appear
function catAppear1(){
    let div = document.getElementById('hideCat1');
    div.id = 'div3';
}
//Makes sad cat gif appear
function catAppear2(){
    let div = document.getElementById('hideCat2');
    div.id = 'divv3';
}

//Hides dancing cat gif
function catDip() {
    let div = document.getElementById('div3');
    let div2 = document.getElementById('divv3');
    
    if (div) {
        div.id = 'hideCat1'; // Change div3 to hideCat1
    }
    if (div2) {
        div2.id = 'hideCat2'; // Change divv3 to hideCat2
    }
}

//Change color of $ and \|/_ Elements in Header
document.addEventListener("DOMContentLoaded", function() {
    let asciiArt = document.getElementById('ascii');
    let text = asciiArt.innerHTML;
  
    // Replace all '$' with a <span class="dollar">$</span>
    text = text.replace(/\$/g, '<span class="dollar">$</span>');
  
    // Update the inner HTML of the h1 tag with the modified text
    asciiArt.innerHTML = text;
  });

//Debugging 
/*
console.log("JavaScript file loaded correctly");
console.log(audioElements);

let x = audioElements[0];
document.getElementById('dance').pause();
audioElements[0].pause();
*/