import styles from './item.module.css'

function Item({fooditem,checkfun}){
    const handlebuy=()=>{
        console.log(`${fooditem} being bought.`);
        alert(`${fooditem} being bought.`);
    }
    return(
        <>
            <li className="list-group-item my_class">
                <span>{fooditem}</span>
                <button type="button" className={`${styles.button} btn btn-success`} onClick={handlebuy} >Buy</button>
                <button id={styles.b} type="button" className={`${styles.button} btn btn-light`}  onClick={checkfun} >Check</button>
            </li>
        </>
    )

}
export default Item;