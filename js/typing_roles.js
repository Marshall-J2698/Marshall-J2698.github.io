// if the character is equal to _, delete instead of typing
// if the character is equal to *, pause instead

var txt = "***_*_**An aspiring chemist***_______developer*****_________engineer**________maker";

var startDelay = 2250;
var typeSpeed = 65;

function typeAndDelete(element,text){
    element.style.opacity = "100%";
    let i = 0;
    element.innerHTML = '|';
    const timer = setInterval(() => {
        if(text.charAt(i) == '_'){
            
            element.innerHTML = element.innerHTML.slice(0,-2);
            element.innerHTML += '|';
            i++;
        }else if(text.charAt(i) != '*'){
            element.innerHTML = element.innerHTML.slice(0,-1); // clear the last dash
            element.innerHTML += text.charAt(i);
            i++;
            element.innerHTML += '|';
        }else {
            i++;
        }
        if (i>txt.length + 1){
            clearInterval(timer);
            element.innerHTML = element.innerHTML.slice(0,-1);
            element.innerHTML += '<span class="cursor">|</span>';
        } 
        
        
    },typeSpeed);
}

function blinkCursor(element){
    let state = 0;
    const timer = setInterval(() => {
        if(state == 0){
            element.innerHTML = element.innerHTML.slice(0,-1);
            element.innterHTML += "&#8203";
            
        }else {
            element.innerHTML += '|';
        }
        // console.log("haiiii");
    },500);

}

setTimeout(() => typeAndDelete(document.getElementById("demo"),txt), startDelay);
// setTimeout(() => blinkCursor(document.getElementById("demo")),startDelay+500+txt.length * typeSpeed);

