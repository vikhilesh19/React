import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItems';
import Container from './components/Container';
import Foodinput from './components/Foodinput';
import { useState } from 'react';

function App() {
  let [fooditems,set_fooditems]=useState(['Dal','Vegetables','Roti','Rice','Milk']);

  let text_state_arr=useState('Food Item Entered by user');
  let text_to_show=text_state_arr[0];
  let set_text_state=text_state_arr[1];

  //in destrcuted array format
  // let [text_to_show,set_text_state]=useState('Food Item Entered by user');
  const handleondown=(event)=>{
    if(event.key==='Enter'){
      let newfooditem=event.target.value;
      let newitems=[...fooditems,newfooditem];
      set_fooditems(newitems);
      console.log(event.target.value);
      set_text_state(event.target.value);
    }
  }
  if(fooditems.length==0){
    return <div> Mottam dolla em le lopala</div>
  }
  return (
    <React.Fragment>
      <h2>Using map</h2>
      <Foodinput handleondown={handleondown}></Foodinput>
      <FoodItems fooditems={fooditems}></FoodItems>

      <Container>
        <h1>Healthy Food</h1>
        {fooditems.length==5? <h4>5 items</h4>:null}
        <ul className="list-group">
          <li className="list-group-item">Dal</li>
          <li className="list-group-item">Vegetables</li>
          <li className="list-group-item">Roti</li>
          <li className="list-group-item">Rice</li>
          <li className="list-group-item">Milk</li>
        </ul>
      </Container>
      
    </React.Fragment>
  )
}
//can be written using <> and </> as shortcut for fragment
export default App;