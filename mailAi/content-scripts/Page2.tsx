import React, { useState } from "react";

export function Page2Main () {
    return(
        <div>
            <Options />
        </div>
    )
}

export function rowContent () {
    return(
        <div></div>
    )
}

export function listContaint () {
    return(
        <div></div>
    )
}

export function Options() {
    const [curState, selectOrientation] = useState(true)
    return(
        <div>
            <div>
                /* controlers */
            </div>
        <div>
            <span>
                {curState? <div>1</div> : <div>2</div>}
            </span>
        </div>
        </div>
    )
}

export default Page2Main
