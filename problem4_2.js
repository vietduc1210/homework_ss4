let dictionary = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only thing you have to do is to wait for users to use it \(no additional codes or actions needed\)",
    defect: "The formal word for \‘error\’",
    pm: "The short version  of Project Manager, the person in charge of the final result of a project",
    uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}

let input = prompt("Enter a keyword");
while(true){
    input1 = input.toLowerCase();
    if(input1 === "ui/ux"){
        alert("ui/ux \n"+dictionary.uiux);
    }
    else if(dictionary.hasOwnProperty(input1) && input1!="uiux"){
        alert(input+"\n"+dictionary[input1]);
    }
    else{
        let ex = prompt("We could not find your word: "+input1+", leave your explaination");
        dictionary[input1] = ex;
        alert("Done");
    }
    input = prompt("Enter a keyword");
}
