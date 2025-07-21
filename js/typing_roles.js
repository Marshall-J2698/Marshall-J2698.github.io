// if the character is equal to _, delete instead of typing
// if the character is equal to *, pause instead

var txt = "***_*_**An as*pirin*g chemist***_______d*e*ve*loper*****_________eng*inee***___**____make*r*";

var startDelay = 1800;
var typeSpeed = 55;

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
    },500);

}

setTimeout(() => typeAndDelete(document.getElementById("demo"),txt), startDelay);

