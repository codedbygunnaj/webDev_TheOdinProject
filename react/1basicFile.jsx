import React from 'react'
function GreetMe(){
    return (
        <div>
            <h3>This is test1</h3>
            <ol start={3}>
                Fruits:
                <li>Watermelon</li>
                <li>Mango</li>
                <li>Cherry</li>
            </ol>        
        </div>
    )
}
function GCMe(props){
    return <h1>Hi, my name is: {props.name}!</h1>
}
function GreetMe2({arr}){
    return (
        <div>
            <h3>This is test2</h3>
            <ol start={3}>
                Fruits:
                <li>{arr[0]}</li>
                <li>{arr[1]}</li>
                <li>{arr[2]}</li>
                <li>Watermelon</li>
            </ol>        
        </div>
    )
}
function GreetMe3({arr2}){
    return (
        <div>
            <h3>This is test3</h3>
            <ol start={3}>
                Fruits:
                {
                    arr2.map((fruitVal,index)=>(
                        <li key={index}>{fruitVal}</li>
                    ))
                }
                <li>Watermelon</li>
            </ol>        
        </div>
    )
}

export {GreetMe,GCMe,GreetMe2,GreetMe3};