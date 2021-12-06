const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")


// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

const innerDiv = document.getElementById('inner')
const wrapperBtn = document.getElementById('wrapper')
let isMoved = true

const moveRight = () => {
    if(isMoved){
        innerDiv.style.transition = 'all 0.3s ease-in 0.1s' 
        innerDiv.style.transform = 'translateX(100%)';  
        innerDiv.style.background = '#C7375F'; 
        isMoved = !isMoved
        body.classList.remove('christmas')
        body.classList.add('snow')
    }else if(isMoved == false){
        innerDiv.style.transform = 'translateX(0%)'; 
        innerDiv.style.background = '#344D2F';  
        body.classList.remove('snow')
        body.classList.add('christmas')
        isMoved = !isMoved
    }
}

wrapperBtn.addEventListener('click', moveRight)









