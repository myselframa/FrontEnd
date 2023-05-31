import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import React, { useState } from "react";

function App() {
  const [cartIsShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </React.Fragment>
  );
}

export default App;
