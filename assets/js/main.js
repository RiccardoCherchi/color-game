var mode = 6
var colors = genarateRandomColors(mode);
var squares = document.querySelectorAll(".square");
var bgcolor = "#232323"
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn")

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected")
    mode = 3;
    colors = genarateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;  
    h1.style.backgroundColor = "steelblue"  
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
}); 

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    mode = 6;
    colors = genarateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;  
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"
        }
});

resetButton.addEventListener("click", function(){
    //generate all new colors 
    colors = genarateRandomColors(mode)
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    //change h1 bg
    h1.style.backgroundColor = "steelblue"
    //change button text to new colors from try again
    resetButton.textContent = "New Colors"
});

colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColror
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again!"
        } else {
            this.style.backgroundColor = bgcolor
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color){
    //loop trought all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given colors
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random =Math.floor(Math.random() * colors.length)
    return colors[random]
}

function genarateRandomColors(num){ 
    //make an array
    var arr = []
    //add random colors in the array
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
        //get random color and push into arr

    }
    //return that array
    return arr;
}

function randomColor(){
    //red form 0 - 255
    var r = Math.floor(Math.random() * 256)
    //green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb("+ r + ", " + g + ", " + b +")";
}