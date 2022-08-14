import React, { useEffect } from "react";
import BotCard from "./BotCard"

function YourBotArmy({ alreadyDrafted=[], getBot }) {


const armyBots = getBot.map(bot => 
  <BotCard 
  bot={bot}
  id={bot.id}
  key={bot.id}
/>
)

// const displayDraftedBots = alreadyDrafted.map((bot) => bot)
const displayDraftedBots = alreadyDrafted.map(bot => 
  <BotCard bot={bot} id={bot.id} key={bot.id} />
  )


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {displayDraftedBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
