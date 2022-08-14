import React from "react";
import BotCard from "./BotCard"

function BotCollection({ getBot, handleBotClick }) {

  const renderBotList = getBot.map(bot =>
    <BotCard 
      bot={bot}
      id={bot.id}
      key={bot.id}
      handleBotClick={handleBotClick}
    />);  

  const renderFourBots = renderBotList.filter((e,k) => k < 4);

  // const renderRandomBots = (randoBot,num) => {
  //   // const randomBotIndex = Math.floor(Math.random() * randoBot.length);

  //   const randoBots = [...randoBot].sort(() => 0.5 - Math.random());

  //   // const randoBots = randoBot[randomBotIndex];

  //   return randoBots.slice(0, num);
  //   // return randoBots;
  //   }
  
  // function handleClickBotMove(id) {
  //   const updatedBots = renderFourBots.filter((bots) => bots.id !== id);
  //   console.log(updatedBots);
  //   setSelectArmyBot(updatedBots);
  // }
    

  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {/* {renderRandomBots(renderFourBots, 4)} */}
        
      </div>
      {renderFourBots}
    </div>
  );
}

export default BotCollection;
