class Form{
constructor(){
this.button=createButton("START");
this.title = createElement("h1");
this.greeting=createElement("h2")
}

display(){
this.title.html("NARUTO STORM 5");
this.title.position(diplayWidth/2,50);
this.button.position(displayWidth/2,200)
this.button.mousePressed(()=>{
    this.button.hide();
    
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
if (player.index===1){
player.name = "NARUTO"

}
else if(player.index===2){
    player.name = "SASUKE"


}

    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 70, displayHeight/4);



})




}


}