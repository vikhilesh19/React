import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItems';
import Container from './components/Container';
import Foodinput from './components/Foodinput';

function App() {
  let fooditems=['Dal','Vegetables','Roti','Rice','Milk'];
  if(fooditems.length==0){
    return <div> Mottam dolla em le lopala</div>
  }
  return (
    <React.Fragment>
      <h2>Using map</h2>
      <Foodinput></Foodinput>
      <FoodItems></FoodItems>

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