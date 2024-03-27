const body = document.getElementsByTagName("body")[0];

// "name" is a thing that we use to callout the function
function setColor(name){
    body.style.backgroundColor= name;
}

// instead of writing the code manually everytime we just write the
// color name



function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    
    // calling out our function with 
    // the parameter 'color' which holds the value of variable 'color'
    body.style.backgroundColor = color;
}



