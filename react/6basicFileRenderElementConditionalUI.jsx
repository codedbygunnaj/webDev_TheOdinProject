import React from "react";
function Animals({ animalAndTheirSound }) {
  return (
    <ol>
      {animalAndTheirSound.map((item) =>
        item.Animal.startsWith("L") ? (
          <li key={item.Animal}>
            Animal who {item.Sound} is called {item.Animal}
          </li>
        ) : null
      )}
    </ol>
  );
}

function Cars({differentCarandModels}){
  if(!differentCarandModels){
    return <div>Loading...</div>
  }
  if(differentCarandModels.length===0){
    return <div>There're no elements in the list</div>
  }
  return (
    <ol>
      {
        differentCarandModels.map((item,index)=>(
        <li key={index}>
          Car's company: {item.car} and Car's Model: {item.model}
        </li>
        ))
      }
    </ol>
  )
}

function Cars2({differentCarandModels}){
  if(!differentCarandModels){
    return <div>Loading...</div>
  }
  if(differentCarandModels.length===0){
    return <div>There're no elements in the list</div>
  }
  return (
    <ol>
      {differentCarandModels.map((item, index) =>
        item.model.includes("I10") ? (
          <li key={index}>
            Car's company: {item.car} and Car's Model: <strong>{item.model}</strong>
          </li>
        ) : (
          <li key={index}>
            Car's company: {item.car} and Car's Model: {item.model}
          </li>
        )
      )}
    </ol>
  )
}

function Cars3({differentCarandModels}){
  if(!differentCarandModels){
    return <div>Loading...</div>
  }
  if(differentCarandModels.length===0){
    return <div>There're no elements in the list</div>
  }
  return (
    <ol>
      {
        differentCarandModels.map((item,index)=>(
        <li key={index}>
          Car's company: {item.car} and Car's Model: {item.model}
        </li>
        ))
      }
    </ol>
  )
}
export {Animals,Cars,Cars2,Cars3}

/*
{animalAndTheirSound.map((item) =>
  item.Animal.startsWith("L") && (
    <li key={item.Animal}>
      Animal who {item.Sound} is called {item.Animal}
    </li>
  )
)}

*/