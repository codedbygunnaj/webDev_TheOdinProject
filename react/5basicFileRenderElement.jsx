import React from "react";
function ListItem(props){
    return <li>{props.animal}</li>
}
function List(props){
    return (
        <ol type="A">
            {props.animals.map((animal)=>{
                return <ListItem key={animal} animal={animal}/>
            })}
        </ol>
    )
}
function Apps(){
    const animals=['Dog','Lizard','SweetLion','HariCow']

    return (
        <div>
            <h1>Animals:</h1>
            <List animals={animals}/>
        </div>
    )
}
export {Apps};