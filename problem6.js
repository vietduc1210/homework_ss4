let arr = [];
let item1 = {
    itemName: "HTML",
    complete: "false",
}
let item2 = {
    itemName: "CSS",
    complete: "false",
}
let item3 = {
    itemName: "Basics of JavaScript",
    complete: "false",
}
let item4 = {
    itemName: "Note Package Manager \[nps\]",
    complete: "false",
}
let item5 = {
    itemName: "Git",
    complete: "false",
}
arr.push(item1);
arr.push(item2);
arr.push(item3);
arr.push(item4);
arr.push(item5);
for(let i=0;i<arr.length;i++){
    console.log((i+1)+". "+arr[i].itemName);
    console.log("   Complete: "+arr[i].complete);
}

let request = ["new","delete","update","complete"]
let input = prompt("Enter your command \(New, Delete, Update, Complete)");
while(true){
    let input1 = input.toLowerCase();
    if(input1==="new"){
        let newTask = prompt("Enter new task:")
        let newItem = {
            itemName: newTask,
            complete: "false",
        }    
        arr.push(newItem);
    }
    if(input1==="delete"){
        let pos = prompt("Enter position");
        arr.splice((pos-1),1);
    }
    if(input1==="update"){
        let pos = prompt("Enter position");
        let newTitle = prompt("Enter new title:");
        arr[pos-1].itemName = newTitle;
    }
    if(input1==="complete"){
        let pos = prompt("Enter position");
        arr[pos-1].complete = "true";
    }
    if(input1==="exit"){
        break;
    }
    input = prompt("Enter your command \(New, Delete, Update, Complete)");

}
for(let i=0;i<arr.length;i++){
    console.log((i+1)+". "+arr[i].itemName);
    console.log("   Complete: "+arr[i].complete);
}
