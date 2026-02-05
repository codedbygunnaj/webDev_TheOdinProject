import React from "react";
function KeysCheck(){
    return (
            <ol>
                <li key={crypto.randomUUID()}>Dhinchak part1</li>
                <li key={crypto.randomUUID()}>Dhinchak part2</li>
                <li key={crypto.randomUUID()}>Dhinchak part3</li>
            </ol>
    )
}
export {KeysCheck}