// 1. Add data to your App component to your React app and move it using props

import { useState } from "react";
function Main() {
  let [brand, setBrand] = useState("Rivian");
  function changeBrand() {
    setBrand("Lucid");
    console.log(brand);
  }
  return (
    <div>
      <h2>The chosen brand is {brand}</h2>
      <button onClick={changeBrand}>Change brand</button>
    </div>
  );
}

export default Main;
