import Item from "./Item";
function FoodItems(){
    let fooditems=['Dal','Vegetables','Roti','Rice','Milk','Eggs'];
    return(
        <ul className="list-group">
        {fooditems.map((item)=>(
            <Item key={item} fooditem={item}></Item>)
        )}
    </ul>
    )
}
export default FoodItems;