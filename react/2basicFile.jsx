import React from "react";
function ObjectArrange({arr}){
    return (
        <div>
            <h3>Welcome to Object Arrange Exercise:</h3>
            <ol type="A">
                {arr.map((item,index)=>(
                    <li key={index}>{item.Color} is color of {item.Name}</li>
                ))};
            </ol>
        </div>
    );
}
function ObjectArrange2({arr}){
    return (
      <div>
            <h3>Welcome to Object Arrange Exercise:</h3>
            <ol type="A">
                {arr.map((item,index)=>(
                    <li key={index}>{item.Name} is {item.Age} years old and likes {item.Color} color.</li>
                ))};
            </ol>
        </div>  
    );
}
function ObjectArrange3(){
    const animalAndTheirSound=[
        {Animal:'Cat',Sound:'Meow'},
        {Animal:'Lion',Sound:'Roars'},
        {Animal:'Dog',Sound:'Barks'},
        {Animal:'Bird',Sound:'Chirps'}
    ]
    return (
        <>
            <ol>
                {animalAndTheirSound.map((item)=>(
                    <li key={item.Animal}>Animal who {item.Sound} is called {item.Animal}</li>
                ))}
            </ol>
        </>
    );
}
/*
function ObjectArrange3() {
  const animalAndTheirSound = [
    { Cat: 'Meow' },
    { Lion: 'Roars' },
    { Dog: 'Barks' },
    { Bird: 'Chirps' }
  ];

  return (
    <ol>
      {animalAndTheirSound.map((item) => {
        const [animal, sound] = Object.entries(item)[0]; 
        return (
          <li key={animal}>
            Animal who {sound} is called {animal}
          </li>
        );
      })}
    </ol>
  );
}
*/

function ObjectArrange4() {
    const cars = ['Ferrari','AUDI','M4','Porche','Jaguar'];
    const carsList=cars.map((car)=><li>I've Seen: {car}</li>)
    return (
        <ol>
            {carsList}
        </ol>
    );
}

export {ObjectArrange,ObjectArrange2,ObjectArrange3,ObjectArrange4};