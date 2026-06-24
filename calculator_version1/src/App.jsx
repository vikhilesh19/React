import styles from './App.module.css'
import Display from './components/Display'
import Buttoncontainer from './components/Buttoncontainer'
import { useState } from 'react'
function App() {
  let [calval,setcalval]=useState('');
  const onbuttonclick=(item)=>{
    if(item==='C'){
      setcalval('');
    }
    else if(item==='='){
      let result=eval(calval);
      setcalval(result);
    }
    else{
      let newdis=calval+item;
      setcalval(newdis);
    }
  }
  return (
    <>
      <div className={styles.calculator}>
        <Display calval={calval}></Display>
        <Buttoncontainer onbuttonclick={onbuttonclick}></Buttoncontainer>
      </div>
    </>
  )
}

export default App
