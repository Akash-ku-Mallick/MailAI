import React, { useState } from "react";

import Page2Main from "./content-scripts/Page2";
import { ChatUI, PromptBar } from "./content-scripts/chat-ui";
// import  { stopElementSelection, start} from  './content-scripts/Inspect'



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
      <div className="MiniBar" onClick={() => { ChangeState(!curState)}} >
        <button role="button" style={{left: 0}}>
          <span className="text">Welcom to MailAI</span>
        </button>
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

  function Sugestions(prop) {
    return <button className="suggestions">{prop}</button>
  }

  function suggestionsBox() {
    const sgs1 = "Sgs111111111111111"
    const sgs2 = "Sgs22222222222222221"
    const sgs3 = "Sgs33333333331111111"
    const sgs = [sgs1, sgs2, sgs3]
    return (
      <div
        className="suggestionsBox"
        style={{ display: "flex", flexDirection: "row" }}>
        {sgs.map(Sugestions)}
      </div>
    )
  }

  // Main Element
 return <div id="mailAi-App" >{curState ? <MiniBar /> : <BigBox />}</div>
}

  

export default App

// add css to this app to stick to bottom
// add ui
// add functions