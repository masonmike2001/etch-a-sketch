//body
let color = "black";
let pixelAmount = 9;

gameBuilder(pixelAmount);

//interface
const pixels = document.getElementsByClassName("pixel");
for (i = 0; i < (pixelAmount * pixelAmount); i++)
{
    pixels[i].addEventListener("mouseover", mouseOver);
}

const buttons = document.querySelectorAll("div > button");
buttons[0].addEventListener("click", changeColor);
buttons[1].addEventListener("click", changeColor);
buttons[2].addEventListener("click", changeSize);

//functions
function gameBuilder (pixelAmount) {
    let etchSketch = document.getElementById('etch-a-sketch');
    for (i = 0; i < pixelAmount; i++) {
        //creates each level of pixels
        let row = document.createElement('div');
        etchSketch.appendChild(row);
        row.setAttribute('id', "row" + i);
        for (j = 0; j < pixelAmount; j++) {
            //creates each row of pixels
            let pixel = document.createElement('div');
            row.appendChild(pixel);
            pixel.setAttribute('class', 'pixel'); 
            pixel.setAttribute('id', ("column" + j)); 
        }
    }
}

function mouseOver (e) {
    if (color == "black")
    {
        (e.target).setAttribute("style", "background:black");
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
    }

}

function changeColor (e) {
    console.log(e);
    if (e.target == buttons[1])
    {
        color = "random";
        (e.target).id = ("openPixel");
    }
    else 
    {
        color = "black";
        (e.target).id = ("openPixel");
        
        
    }


}

function gameDestroyer (){
  
    for (i = 0; i < (pixelAmount * pixelAmount); i++)
{
    pixels.removeChild(pixel);
}


}

function changeSize (e) {
    size = gameBuilder(prompt("How high would you like your Etch-a-Sketch to be?"));
    gameDestroyer();
    gameBuilder(size);



color = "black";

//interface
pixels = document.getElementsByClassName("pixel");
for (i = 0; i < (pixelAmount * pixelAmount); i++)
{
    pixels[i].addEventListener("mouseover", mouseOver);
}
}
