import { useContext } from "react";
import CartContext from "./Store/CartContext.jsx";
import { Modal } from "./UI/Modal.jsx";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "./Store/UserProgressContext.jsx";

export default function Checkout() {
    
   const CartCtx = useContext(CartContext);
   const UserProgressCtx = useContext(UserProgressContext);

   const cartTotal = CartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  function handleCloseCheckout() {
    UserProgressCtx.hideCheckout();
  }

  return (
    <Modal open = {UserProgressCtx.progress === 'checkout'}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>
            <Input label="Full Name" type="text" id="full-name"/>
            <Input label="E-Mail" type="email" id="email"/>
            <Input label="Street" type="text" id="street"/>
            <div className="control-row">
            <Input label="Pin Code" type="text" id="postal-code"/>
            <Input label="City" type="text" id="city"/>
            </div>
            <p className="modal-actions">
                <Button  type="button" textOnly={true} onClick={handleCloseCheckout}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
  );
}