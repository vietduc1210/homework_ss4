function pro8(){
let square ={
x: 100,
y: 50,
width: 20,
}
penup();
right(90);
forward(square.x);
left(90);
forward(square.y);
pendown();
repeat(4, function () {
      forward(square.width);
      right(90);
   });
}
                