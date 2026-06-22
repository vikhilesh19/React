import styles from './foodinput.module.css'
const Foodinput=()=>{
    const handleonchange=(event)=>{
        console.log(event.target.value);
    }
    return <input className={styles.foodinput} type="text" placeholder='Enter Food Item Here'
    onChange={handleonchange}/>
}
export default Foodinput;