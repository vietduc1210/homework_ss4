let store = [];
let item1={
    itemName: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color:"White",
    category: "charger"
}
let item2={
    itemName: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color:"Black",
    category: "phone"
}
let item3={
    itemName: "Iphone X",
    brand: "Apple",
    price: 21490,
    color:"Gray",
    category: "phone"
}
let item4={
    itemName: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color:"Blue",
    category: "phone"
}
store.push(item1);
store.push(item2);
store.push(item3);
store.push(item4);
item1.providers = ["phukienzero", "dientuccc"];
item2.providers = ["tgdd", "ddghn", "Vhstore"];
item3.providers = ["tgdd"];
item4.providers = ["tgdd"];
let pro = prompt("Enter provider")
for(let i=0;i<store.length;i++){
    if(store[i].providers.includes(pro.toLowerCase())){
        console.log("----------------------------");
        console.log("Name: "+ store[i].itemName+"\nBrand: "+store[i].brand+"\nPrice: "+store[i].price+"\nColor: "+store[i].color+"\nCategory: "+store[i].category+"\nProviders: "+store[i].providers);
    }
    }
