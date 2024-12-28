function tossButtonClicked() {
    let tossImgDiv = document.body.querySelector("#tossImgDiv");
    tossImgDiv.style.animationName = "rotateClock"
    tossImgDiv.style.animationDuration = "1s";

    let tossButton = document.body.querySelector("#tossButton");
    tossButton.disabled = true;

    
}


document.body.onload = setTimeout(() => {
    let toHide = document.body.querySelectorAll(".toBeHiddenAfterLoad");
    for (el of toHide){
        el.style.display = 'none';
    }
}, 3000)

