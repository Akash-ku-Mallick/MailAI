import React, { useState } from "react";

import Page2Main from "./content-scripts/Page2";
// import  { stopElementSelection, start} from  './content-scripts/Inspect'
import { SuggestionsBox } from './content-scripts/widget'
import { CopyIcon } from './content-scripts/widget'


import "./content-scripts/style.css";


export const App = () => {
  const [curState, ChangeState] = useState(false)
  const [curStateBig, ChangeStateBig] = useState(true)

  function BigBox() {
    return (
      <div id="ma-BigBox" className="PopupBox">
        <NavBar />
        {curStateBig ? <ChatUI /> : <Page2Main />}
        {curStateBig && <PromptBar />}
      </div>
    )
  }

  function MiniBar() {
    return (
      <div className="MiniBar" >
        <button role="button" onClick={() => { ChangeState(!curState)}}>
          <span className="text">Welcom to MailAI</span>
        </button>
        <SuggestionsBox />
      </div>
    )
  }

  function NavBar() {
    console.log("Navbar is called")

    return (
      <div id="navBar" className="topBar">
        <button> Setting </button>
        <button
          onClick={() => { ChangeState(!curState)}}>
          {" "}
          minimize{" "}
        </button>
        <button >Import File</button>
        <button id="tempo" value={'temporary'}> InSpectOFF </button>
        
      </div>
    )
  }



  // Main Element
 return <div id="mailAi-App" >{curState ? <MiniBar /> : <BigBox />}</div>
}

const PromptBar = () => {
  const [hiddenBarStatus, hiddenBarOption] = useState(true);

  const HiddenBar = () => {
      return ( <div>
          <button>Grab</button>
          <button>Auto Select</button>
      </div>)
      }

  return(
      <div id="promptBar" className="promptBar">
          
          <div className="PromptInput">
              <textarea></textarea>
              <button>{"=>"}</button>
          </div>
          {hiddenBarStatus && <HiddenBar />}
          <button onClick={()=>{hiddenBarOption(!hiddenBarStatus)}}>exp</button>
      </div>
  )
  // ADD Sugestion-Box and Button to drop-down options for Grab-from-page 
}

var BotReply:string = "Hi How may I help you !"
  const MessageUi = () => {
      return(
          <div className="RoboChat">
              <div className="bot-icon"></div>
              <div className="bot-Text-Div">
                  <p className="bot-Text"> {BotReply+'afsdfbguvryruutytrvybtyutbbyutubtiu'} </p>
                  <button className="copyIcon" ><CopyIcon /></button>
              </div>
          </div>
      )
  }
  const ComandUi = () => {
      return(
          <div className="ComandUi">
              <div className="bot-Text-Div" style={{order: 0}}>
                  <p className="bot-Text"> {BotReply+'2 gggggtjjjj ggggggggggg fdddddddddd sgrhabth'} </p>
                  <button className="copyIcon" ><CopyIcon /></button>
              </div>
              <div className="bot-icon" style={{order: 2}}></div>
          </div>
      )
  }

export function ChatUI () {
  return(
      <div className="ChatFrame" style={{order: 2}}>
          <MessageUi />
          <ComandUi />
      </div>
  )
}

export default App

// add css to this app to stick to bottom
// add ui
// add functions