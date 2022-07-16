class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Enter your name");
    this.playButton=createButton("PLAY");
    this.titleImg=createImg("assets/title.png");
    this.greeting=createElement("h2");
  }

  setElementPosition(){
    this.titleImg.position(120,10);
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-90,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }

  setStyling(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput"); //name - Shruthi
    this.playButton.class("customButton");
    this.greeting.class("greeting")
    
  }

  handleMousePressed() {

    //arrow function- ()=>{}
    this.playButton.mousePressed(()=>{
       var message=`Hello ${this.input.value()} </br> Wait for other player to join...`
       this.greeting.html(message)
       this.playButton.hide()
       this.input.hide()
    })
    
  }

  display(){
    this.setElementPosition();
    this.setStyling();
    this.handleMousePressed();
  }

}
