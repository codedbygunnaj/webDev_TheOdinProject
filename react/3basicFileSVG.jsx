import React from "react";
function SVGDraw(){
    return (
        <div>
            <svg width={200} height={200}>
                <circle cx="100" cy="100" r="80" fill="yellow" stroke="black" strokeWidth={5}/>
            </svg>
        </div>
    );
}

export default SVGDraw;