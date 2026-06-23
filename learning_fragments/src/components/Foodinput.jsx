import { useState } from 'react';
import styles from './foodinput.module.css'

const Foodinput=({handleondown})=>{
    
    return (
        <>
            <input className={styles.foodinput} type="text" placeholder='Enter Food Item Here'
            onKeyDown={handleondown}/>
            {/* <p>{text_to_show}</p> */}
        </>
    )
}
export default Foodinput;