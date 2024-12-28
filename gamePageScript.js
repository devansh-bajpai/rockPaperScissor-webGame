function afterLoad() {
    let gameWindow = document.body.querySelector("#gameWindow");
    // gameWindow.style.display = 'unset';

    gameWindow.style.display = 'flex';
    gameWindow.style.alignItems = 'center';
    gameWindow.style.justifyContent = 'center';
    gameWindow.style.flexDirection = 'column';
}

document.body.onload = setTimeout(() => {
    let toHide = document.body.querySelectorAll(".toBeHiddenAfterLoad");
    for (el of toHide){
        el.style.display = 'none';
    }

    afterLoad();

}, 1000)

