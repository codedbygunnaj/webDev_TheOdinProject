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
export {ObjectArrange,ObjectArrange2};