import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GCMe,GreetMe,GreetMe2,GreetMe3 } from '../../1basicFile.jsx'
import {ObjectArrange,ObjectArrange2} from '../../2basicFile.jsx'
import SVGDraw from '../../3basicFileSVG.jsx'
import {FormMaker} from '../../4basicFileForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GreetMe/> */}
    {/* <GreetMe2 arr={['Grapes','Mango','Strawberry']}/> */}
    {/* <GreetMe3 arr2={['Grapes','Mango','Strawberry']}/> */}

    <GCMe name="Gunaj"/>
    <ObjectArrange arr={[
      {Color:'Blue',Name:'Ranjan'},
      {Color:'Yellow',Name:'Kavita'},
      {Color:'White',Name:'Draupati'}
    ]}/>

    <ObjectArrange2 arr={[
        { Name: 'Ranjan', Color: 'White', Age: 20 },
        { Name: 'Savita', Color: 'Purple', Age: 15 },
        { Name: 'Krrish', Color: 'Yellow', Age: 17.5 }
      ]}/>

    <SVGDraw/> 

    <FormMaker/>
    {/* <App /> */}
  </StrictMode>,
)
