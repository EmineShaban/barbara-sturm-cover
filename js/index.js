let a = document.getElementsByClassName("a")
let q = document.getElementsByClassName("q")

const buttonGroup = document.getElementsByClassName("button-group");


const buttonGroupPressed = (e) => {
    console.log(e.target)
    if (e.target.className == "q") {
        console.log(e.target.parentElement.children[1].style.display)
        if (e.target.parentElement.children[1].style.display == "" || e.target.parentElement.children[1].style.display == "none"){
            e.target.parentElement.children[1].style.display = "block"
            console.log(e.target.parentElement.children[1].style.display)
        }else{
            e.target.parentElement.children[1].style.display = "none"
            console.log(e.target.parentElement.children[1].style.display)

        }
    }else if(e.target.className == "a"){
        if(e.target.parentElement.children[1].style.display == "block"){
            e.target.parentElement.children[1].style.display = "none"
            console.log(e.target.parentElement.children[1].style.display)
        }
    }

    
}
 

for (let index = 0; index < buttonGroup.length; index++) {
    buttonGroup[index].addEventListener('click', buttonGroupPressed);
}