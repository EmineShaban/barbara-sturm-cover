
let a = document.getElementsByClassName("a")
let q = document.getElementsByClassName("q")

const buttonGroup = document.getElementsByClassName("button-group");

const buttonGroupPressed = (e) => {
    if (e.target.parentElement.parentElement.children[1].style.display == "block") {
        console.log(e.target.parentElement.parentElement.children[1].className)
        if (e.target.parentElement.parentElement.children[1].className == "a") {
            console.log(e.target.className)
            e.target.parentElement.parentElement.children[1].style.display = "none"
           
        }
    } else {
        e.target.parentElement.parentElement.children[1].style.display = "block"
 
    }
}

for (let index = 0; index < buttonGroup.length; index++) {
    buttonGroup[index].addEventListener('click', buttonGroupPressed);
}

