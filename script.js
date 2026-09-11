//Basically i'll just some docs since this is like v2, basically i made an all squares container that contains all 'lines' of squares, these squares are inside a gridcontainer div?
//Why called gridcontainer? just a leftover of v1, any currently how it works is that i reference the allsquares div, then in a nested for i make a grid container, then i append squares to the grid container, the grid container itself is appended to the allsquarescontainer
//I'll set the limit of square on each side to 15
const allSquaresContainer = document.querySelector(".all-squares-container")
const hwButton = document.querySelector(".HW-button")


//adding to square to gridContainer
function makeGrid(size){
    for(let i = 0; i < size; i++){
    const gridContainer = document.createElement("div")
    gridContainer.classList.add("grid-container")
    allSquaresContainer.appendChild(gridContainer)
    for(let j = 0; j < size; j++){
        const square = document.createElement("span")
        square.classList.add("square")
        gridContainer.appendChild(square)

        //Hover effects, probably need mouse listeners
        //for starters, the mouseover event should have a good solid color
        //the mouseout event should maybe have like have the opacity of the good solid color, maybe also start calc of time and gradually decrease its opacity
        square.addEventListener("mouseover", () => {
            console.log("Im in")
            square.style.backgroundColor = "green"
        })

        square.addEventListener("mouseout", () => {
            console.log("Im out")
            square.style.backgroundColor = "rgb(0 255 0 / 50%)"
        })

    }
}
}

makeGrid(16)

hwButton.addEventListener("click", () => {
    //How to delete previous grid?
    
    let size = prompt("Size?: ")

    while(size > 100 || size < 1){
        alert("Enter a number between 2 and 100")
        height = Number(prompt("Height?: "))
    }

    //makes allsquares empty
    allSquaresContainer.innerHTML = ""
    makeGrid(size)
})


//Hover effects

//Hm, if i take square and add it to the global scope, this event works, but if i leave it in the for loop, then square isn't defined?,
//Putting this in the for loop wont work, probably
//Well putting the event listener worked, apparently there is a different between the variable and the actual DOM element,
//By attaching the event listner in the for loop, it allowed the listener to be attached to the DOM element, etc
