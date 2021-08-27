let store = [];
let item1={
    itemName: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color:"White",
    category: "Charger"
}
let item2={
    itemName: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color:"Black",
    category: "Phone"
}
let item3={
    itemName: "Iphone X",
    brand: "Apple",
    price: 21490,
    color:"Gray",
    category: "Phone"
}
let item4={
    itemName: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color:"Blue",
    category: "Phone"
}
store.push(item1);
store.push(item2);
store.push(item3);
store.push(item4);
for(let i=0;i<store.length;i++){
    console.log("#"+(i+1)+". "+ store[i].itemName);
    console.log("    "+store[i].price);
    }
let pos = prompt("Enter product position:");
while(isNaN(pos)){
    pos = prompt("Enter product position:");
}
console.log("Name: "+ store[pos-1].itemName+"\nBrand: "+store[pos-1].brand+"\nPrice: "+store[pos-1].price+"\nColor: "+store[pos-1].color+"\nCategory: "+store[pos-1].category);