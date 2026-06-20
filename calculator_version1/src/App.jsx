import styles from './App.module.css'
import Display from './components/Display'
import Buttoncontainer from './components/Buttoncontainer'
function App() {

  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <Buttoncontainer></Buttoncontainer>
      </div>
    </>
  )
}

export default App
