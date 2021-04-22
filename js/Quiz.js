class Quiz {
constructor() {}
getState() {
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
})
}

update(state){
database.ref('/').update({
gameState:state
});
}

async start(){
if(gameState===0) {
contestants = new Contestant();
var contestantCountRef=await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()) {
  contestantCount = contestantCountRef.val();
  contestant.getCount();
}
question = new Question();
question.display();
}
}
play() {
question.hide();
background("Yellow");
fill(0)
textSize(30)
text("Result of the Quiz",340,50);
//text(".............................",320,65);
Contestant.getPlayerInfo();
if (allContestants !== undefined) {
  debugger;
  var display_answers=230;
  fill("Blue");
  textSize(20)
  text("Note:Contestants who had given corrct answer is present in green Colour",150,230)
  
  for(var plr in allContestants){
  debugger;
  var correctAns="1";
  if (correctAns=allContestants[plr].answer) {
    fill("Green")
  } else {
    fill("Red")
    display_answers+=30
    textSize(20)
    text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answers)
}
}
}
}
}

