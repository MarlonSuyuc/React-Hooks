/** // UseState
 * import CounterApp from "./Components/useStateApp/CounterApp";
 * import ConditionalApp from "./Components/useStateApp/ConditionalApp";
 * import ErrorApp from "./Components/useStateApp/ErrorApp";
 * import ProductApp from "./Components/useStateApp/ProductApp";
 * import ShoppingCart from "./Components/useStateApp/ShoppingCart";
 * // UseEffect
 * import LifeCircle from "./Components/useEffectApp/LifeCircle";
 * import FetchCard from "./Components/useEffectApp/FetchCard";
 * import ResizeApp from "./Components/useEffectApp/ResizeApp";
*/
import LifeCircle from "./Components/useEffectApp/LifeCircle";



// import { useState } from "react";
function App() {
  // const [show, setShow]=useState(false)
  return (
    <div>
      {/* <h1>useState</h1> */}
      {/* <hr /> */}
      {/* <CounterApp />
      <hr />
      <ConditionalApp />
      <hr />
      <ErrorApp />
      <hr />
      <ProductApp/>
    <hr /> */}
      {/* <ShoppingCart/> */}
      <hr />
      <hr />
      <hr />
      <h1>useEffect</h1>
      <LifeCircle />
      <hr />
      {/* <FetchCard/> */}
      <hr />

      {/* <button onClick={()=>setShow(!show)}>show/Hide</button>
      {
        show && <ResizeApp/>
      } */}

    </div>
  );
}

export default App;
