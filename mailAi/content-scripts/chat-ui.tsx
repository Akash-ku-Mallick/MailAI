import React, { useRef } from "react";
import './style.css'
import { CopyIcon } from './widget'


export const PromptBar = () => {
    console.log(">>>>>>>>>>>______PromptBar_________<<<<<<")
    return(
        <div id="promptBar">
            
            <div>
                <input type="text"></input>
                <button>/</button>
            </div>

        </div>
    )
    // ADD Sugestion-Box and Button to drop-down options for Grab-from-page 
}


export function ChatUI () {
    var BotReply:string = "Hi How may I help you !"
    const MessageUi = () => {
        return(
            <div className="RoboChat">
                <div className="bot-icon"></div>
                <div className="bot-Text-Div">
                    <p className="bot-Text"> {BotReply} </p>
                    <button className="copyIcon" ><CopyIcon /></button>
                </div>
            </div>
        )
    }
    return(
        <div className="ChatFrame">
            <MessageUi />
        </div>
    )
}

