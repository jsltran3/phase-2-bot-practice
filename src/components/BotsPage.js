import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [getBot, setGetBot] = useState([])
  const [selectArmyBot, setSelectArmyBot] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots"
    , {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    )
      .then((resp) => resp.json())
      .then((bots) => {
        const updatedBots = bots.map((bot) => {
          return {...bot, drafted: false};
        });
        setGetBot(updatedBots)
        console.log(updatedBots)
      })
  }, [])





  // function handleBotClick(bot) {
  //   const arr = setSelectArmyBot([...selectArmyBot, bot]);
  //   const arrSame = () => arr == bot ? (setSelectArmyBot([...selectArmyBot, bot])) : ""
  //   return arrSame(bot);
  // }

  function handleBotClick(draftedBot) {
    
    // const updatedBot = selectArmyBot.map((draftee) => {
    const updatedBot = getBot.map((toBeDrafted) => {
      if (toBeDrafted.id === draftedBot.id) return {...toBeDrafted, drafted: true };
      console.log("I was drafted")
      return toBeDrafted;
      
    })

    setGetBot(updatedBot)
    console.log("Got to the bottom")
    console.log(updatedBot)
  }

  const alreadyDrafted = getBot.filter((bot) => bot.drafted);


  return (
    <div>
      <YourBotArmy 
        getBot={getBot}
        setGetBot={setGetBot}
        selectArmyBot={selectArmyBot}
        setSelectArmyBot={setSelectArmyBot}
        handleBotClick={handleBotClick}
        alreadyDrafted={alreadyDrafted}
      />
      <BotCollection 
        getBot={getBot}
        handleBotClick={handleBotClick}
      />
    </div>
  )
}

export default BotsPage;
