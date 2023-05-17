import type { PlasmoCSUIProps } from "plasmo";
import React from "react";


export const OverlayRoort: React.FC<PlasmoCSUIProps> = () => { 
    console.log(">>>>>----reached overlay creater--")
    return <div id="mail-AI-Root"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `100%`,
      height: 10,
      zIndex: 2147483647,
      backgroundColor: "black",
      opacity: .6,
      color: "white"
    }}>Shadow DOm</div>;
}

export default OverlayRoort;


/// this is making a shadow root 
// will remove if not needed