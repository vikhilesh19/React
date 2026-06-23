import Item from "./Item";
function FoodItems({fooditems}){
    return(
        <ul className="list-group">
        {fooditems.map((item)=>(
            <Item key={item} fooditem={item} checkfun={()=>alert('Clicked')}></Item>)
        )}
    </ul>
    )
}
export default FoodItems;