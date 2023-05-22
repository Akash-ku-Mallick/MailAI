import type { PlasmoCSConfig, PlasmoCSUIJSXContainer, PlasmoCSUIProps, PlasmoRender } from "plasmo";
import React from "react";
import { createRoot } from 'react-dom/client';
import App from '../mailAi/app';

console.log("update me")

export const config: PlasmoCSConfig = {
    matches: ["https://*.google.com/*"]
  }


// creating a div available by plasmo as root for our work
const plasmoRoot = document.getElementById("__plasmo-loading__");

// If this does not work i will create a new div and will append that to HTML body

plasmoRoot.id = "mail-AI-Root";


// clearing previous Styles and Child Contents
plasmoRoot.removeAttribute('style');
while (plasmoRoot.firstChild) {
  plasmoRoot.removeChild(plasmoRoot.firstChild);
}

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${plasmoRoot.id} {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  background: #ffffff;
  z-index: 2147483647;
  }
`;
plasmoRoot.appendChild(globalStyles);

const root = createRoot(plasmoRoot as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





// ******************   SHADOW ROOT CODE TO USE IF REQUIRED   <<<<<<<<

export const PlasmoOverlay: React.FC<PlasmoCSUIProps> = () => { 
    console.log(">>>>>----reached overlay Shadow creater--")
    return <div id="test-mail-AI-Root"
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

 // for reference     export type PlasmoCSUIAnchor = {type: "overlay" element: document.body}

export const render: PlasmoRender<PlasmoCSUIJSXContainer> = async ({createRootContainer}) => {
    console.log(">>>>>----reached rendererr--")
    // find wtf is reateRootContainer
    const rootContainer = await createRootContainer({type: "overlay", element: document.body})
    const root = createRoot(rootContainer)
    // as the @typescript/react-dom file don not have ReactDom.createRoot we are using first line of code
    root.render(<div style={{position: "fixed", right: 0, height: 0, width: 0}}></div>)
    console.log(">>>>>----exit rendererr--")
  }

  export default PlasmoOverlay

  
