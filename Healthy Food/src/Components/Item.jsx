import "../App.css";
import styles from "./Item.module.css";
function Item({ foodItems, bought, handleBuyButton }) {
  /*const handelOnClick = (event) => {
    console.log(event);
    console.log(`${foodItems} is being bought`);
  };*/
  return (
    <li className={`${styles.foodItem} list-group-item ${bought && "active"}`}>
      <span>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}
export default Item;
