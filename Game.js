class Game {
  constructor()
  {

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
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
      playerCount = playerCountRef.val();
      player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play()
{
  form.hide();
  Player.getPlayerInfo();
  text("Game Start",120,100);
  if(allplayers !== undefined)
  {
    var displayPosition = 130;
    for(var plr in allplayers)
    {
      displayPosition = displayPosition + 20;
      text(allplayers[plr].name+allplayer[plr].distance,120,displayPosition);
    }
  }
}
}
