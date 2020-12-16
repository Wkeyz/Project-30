class Box{
    constructor(x, y, width, height){
        var options = {
            'restitution':1,
            'friction':1.0,
            'stiffness':0.01,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        World.add(world, this.body);
    }
    display(){
       
       if(this.body.speed<2.5){
        push();
        translate(this.body.position.x, this.body.position.y); 
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
       }
       else{
           World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        rect( 0, 0, this.width, this.height);
            pop();
       }
       

      }
  };
  