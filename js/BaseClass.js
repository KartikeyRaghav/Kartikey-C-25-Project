class BaseClass {

    constructor(x,y) {

        this.body = Bodies.rectangle(x,y);

        this.image = loadImage("Different Languages/Malay.png");

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        image(this.image,pos.x,pos.y,40,400);
        pos.y = pos.y + 3;
        pop();
    }
}