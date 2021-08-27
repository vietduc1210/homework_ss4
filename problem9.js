function pro9(){
let rect ={
x: 100,
y: 50,
width: 20,
height: 40,
}
penup();
right(90);
forward(rect.x);
left(90);
forward(rect.y);
pendown();
repeat(4, function () {
    forward(rect.height);
    right(90);
    forward(rect.width);
    right(90);
});
}