import type { PlasmoRender, PlasmoCSUIJSXContainer, PlasmoCSUIProps, PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo";
import React from "react";
import { createRoot } from "react-dom/client"
import OverlayRoort from '../mailAi/content-scripts/OverlayRoot'

console.log("update me")

export const config: PlasmoCSConfig = {
    matches: ["https://*.google.com/*"]
  }


// creating a div available by plasmo as root for our work
const plasmoRoot = document.getElementById("__plasmo-loading__");

plasmoRoot.id = "react-chrome-app";


// clearing previous Styles and Child Contents
plasmoRoot.removeAttribute('style');
while (plasmoRoot.firstChild) {
  plasmoRoot.removeChild(plasmoRoot.firstChild);
}

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${plasmoRoot.id} {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 2147483647;
  }
`;
plasmoRoot.appendChild(globalStyles);

// this div is free with new id

// ******************88Shadow Root For Experimentation

export const PlasmoOverlay: React.FC<PlasmoCSUIProps> = () => { 
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
    }}></div>;
}



// export type PlasmoCSUIAnchor = {
//   type: "overlay"
//   element: document.body
// }



export const render: PlasmoRender<PlasmoCSUIJSXContainer> = async ({createRootContainer}) => {
    console.log(">>>>>----reached rendererr--")
    // find wtf is reateRootContainer
    const rootContainer = await createRootContainer({type: "overlay", element: document.body})
    const root = createRoot(rootContainer)
    // as the @typescript/react-dom file don not have ReactDom.createRoot we are using first line of code
    root.render(<OverlayRoort />)
    console.log(">>>>>----exit rendererr--")
  }
