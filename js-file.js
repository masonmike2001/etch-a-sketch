//body
let color = "white";
let pixelAmount = 9;

gameBuilder(pixelAmount);

//interface

const buttons = document.querySelectorAll("div > button");
buttons[0].addEventListener("click", changeColor);
buttons[1].addEventListener("click", changeColor);
buttons[2].addEventListener("click", changeSize);
buttons[3].addEventListener("click", reset);

//functions
function gameBuilder (pixelAmount) {
    let etchSketch = document.getElementById('etch-a-sketch');
    for (i = 0; i < pixelAmount; i++) {
        //creates each level of pixels
        let row = document.createElement('div');
        etchSketch.appendChild(row);
        row.setAttribute('id', "row");
        for (j = 0; j < pixelAmount; j++) {
            //creates each row of pixels
            let pixel = document.createElement('div');
            row.appendChild(pixel);
            pixel.setAttribute('class', 'pixel'); 
            pixel.setAttribute('id', ("column")); 
        }
    }
    const pixels = document.getElementsByClassName("pixel");
    for (i = 0; i < (pixelAmount * pixelAmount); i++)
    {
        pixels[i].addEventListener("mouseover", mouseOver);
    }
}

function mouseOver (e) {
    //changes the color of the pixel if mouseover event
    if (color == "white")
    {
        (e.target).setAttribute("style", "background:white");
    }
    else if ((e.target).id != "changedPixel")
    {
        let choice = 0;
        while (choice > 4 || choice < 1)
        {
            choice = Math.floor(Math.random() * 10);
        }    
        (e.target).id = ("changedPixel");
        switch(choice) {
            case 1:
                color = "red";
                break;
            case 2:
                color = "blue";
                break;
            case 3:
                color = "green";
                break;
            case 4:
                color = "purple";
                break;
        }   
        (e.target).setAttribute("style", "background:" + color);
        (e.target).removeAttribute('id');
    }
}

function changeColor (e) {
    //changes the user color preference
    console.log(e);
    if (e.target == buttons[1])
    {
        color = "random";
        (e.target).id = ("openPixel");
    }
    else 
    {
        color = "white";
        (e.target).id = ("openPixel");   
    }
}

function gameDestroyer (){
    //eliminates pixels one by one
        let etchSketch = document.querySelector('#etch-a-sketch');
        while (etchSketch.firstChild)
        {
            etchSketch.removeChild(etchSketch.lastChild);
        }
}

function changeSize (e) {
    //resets the etch a sketch and builds a new custom-sized one
    pixelAmount = prompt("How high would you like your Etch-a-Sketch to be?");
    if (pixelAmount < 65 && pixelAmount != 0)
    {
        gameDestroyer();
        gameBuilder(pixelAmount);
    }
    else{
        alert("Please enter a value under 65!");
    }
}

function reset() {
    //resets the etch a sketch so that the original board is built
    gameDestroyer();
    gameBuilder(8);
}
