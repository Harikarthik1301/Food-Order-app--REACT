import { useContext } from "react";
import { Modal } from "./UI/Modal.jsx";
import CartContext from "./Store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "./Store/UserProgressContext.jsx";
import CartItem from "../CardItem.jsx";


export default function Cart() {

  const CartCtx = useContext(CartContext);

  const UserProgressCtx = useContext(UserProgressContext);

  const cartTotal = CartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  function handleCloseCart() {
    UserProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={UserProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {CartCtx.items.map((item) => (
          <CartItem  
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onIncrease={()=>CartCtx.addItem(item)}
          onDecrease={()=>CartCtx.removeItem(item.id)}/>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <Button textOnly={true} onClick={handleCloseCart}>Close</Button>
      <Button>Go To Checkout</Button>
    </Modal>
  );
}
