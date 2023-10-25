
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "./Store/CartContext.jsx";
import { useContext } from "react";
import UserProgressContext from "./Store/UserProgressContext";


export default function Header() {

   const cartCxt = useContext(CartContext);
   const totalItemsinCart = cartCxt.items.reduce((noofItems,item)=>{
      return noofItems + item.quantity;
   },0);

  const UserProgressCntx = useContext(UserProgressContext);


   function handleShowCart() {
    UserProgressCntx.showCart();
   }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>Hungry Hunt</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} >Cart ({totalItemsinCart})</Button>
      </nav>
    </header>
  );
}
