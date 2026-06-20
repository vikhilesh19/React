import styles from './Buttoncontainer.module.css'
const Buttoncontainer=()=>{
    let button_name=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.',]
    return(
        <div className={styles.buttons_container}>
          {button_name.map(item=><button className={styles.button}>{item}</button>)}
        </div>
    )
}
export default Buttoncontainer;