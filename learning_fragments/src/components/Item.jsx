import styles from './item.module.css'

function Item({fooditem}){
    const handlebuy=()=>{
        console.log(`${fooditem} being bought.`);
        alert(`${fooditem} being bought.`);
    }
    return(
        <>
            <li className="list-group-item my_class">
                <span>{fooditem}</span>
                <button type="button" className={`${styles.button} btn btn-success`} onClick={handlebuy}>Buy</button>
            </li>
        </>
    )

}
export default Item;