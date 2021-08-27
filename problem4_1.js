let dictionary = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only thing you have to do is to wait for users to use it \(no additional codes or actions needed\)",
    defect: "The formal word for \‘error\’",
    pm: "The short version  of Project Manager, the person in charge of the final result of a project",
    uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}

let input = prompt("Enter a keyword");
if(input === "ui/ux"){
    alert("ui/ux \n"+dictionary.uiux);
}
else if(input==="debug"||input==="done"||input==="defect"||input==="pm"){
    alert(input+"\n"+dictionary[input]);
}
else{
    alert("We could not find your word: "+input);
}
