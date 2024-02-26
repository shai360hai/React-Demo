"use strict"

function BetterButton(text, properties){
    
    return <button> {text} </button>
}

// function MyButton(){
//     let elementType = "button";
//     let properties = {id: "button3", className: "myclass"}
//     let text = "Click me!";
//     return React.createElement(elementType, properties, text);
// }

function MyTitle(){
    let button = BetterButton("HEAD BUTTON");
    return React.createElement("h1", null, "Hello World!", button);
}

function MyDiv(){
return React.createElement("div",null, MyTitle(), BetterButton("first"), BetterButton("second"))
}

let root = document.getElementById("root");
let rootApp = MyDiv();

ReactDOM.render(rootApp, root);