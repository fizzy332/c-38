class Quiz {
  constructor(){
  this.title2=createElement("h1");
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    
    //write code to change the background color here

 


   getPlayerInfo()
if(allContestants!==undefined){
  fill("blue")
textSize(20)
text("*Note: Contestant who answered correctly are highlighted in green")
}
  
for(var plr in allContestants){
  var correctAns = "2"
 if (correctAns===allContestants[plr].answer){
fill ("green")
 }
 else{
   fill ("red");
 }
}

}
}
  


