import type { PlasmoCSConfig } from "plasmo"
import React from "react"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
  world: "MAIN"
}



export default function PlasmoMainUI() {
  console.log("all great");
  return (
    <div style={{
      position: "fixed",
      bottom: '0%',
      right: '0%',
      minHeight: 80,
      minWidth: 150,
      marginRight: 15,
      marginBottom: 5,
      zIndex: 2147483647,
      fontSize: 10,
      backgroundColor: "black",
      opacity: 0.6,
      padding: 4
    }} id="mail-ai-container">
    </div>
  )
}