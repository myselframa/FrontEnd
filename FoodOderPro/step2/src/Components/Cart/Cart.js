import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Dosa",
          description: "Finest fish and veggies",
          price: 60.99,
        },
      ].map((iteam) => (
        <li>{iteam.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>120.44</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
