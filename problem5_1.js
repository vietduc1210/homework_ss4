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
    console.log("------------------");
    console.log("Name: "+ store[i].itemName);
    console.log("Price: "+ store[i].price);
    }