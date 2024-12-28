
document.body.onload = setTimeout(() => {
    let toHide = document.body.querySelectorAll(".toBeHiddenAfterLoad");
    for (el of toHide){
        el.style.display = 'none';
    }
}, 3000)

