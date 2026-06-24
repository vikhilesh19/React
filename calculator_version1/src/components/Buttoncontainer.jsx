import styles from './Buttoncontainer.module.css'
const Buttoncontainer=({onbuttonclick})=>{
    let button_name=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.',]
    return(
        <div className={styles.buttons_container}>
          {button_name.map(item=><button className={styles.button} onClick={()=>onbuttonclick(item)}>{item}</button>)}
        </div>
    )
}
export default Buttoncontainer;