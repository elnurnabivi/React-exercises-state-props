// 2. Add theme your site and change it using buttons - Dark, Light, Neutral; add the theme to the
// state
import { useState } from "react";
function Theme() {
  const [theme, setTheme] = useState("Light");
  function changeTheme(newTheme) {
    setTheme(newTheme);
  }
  return (
    <div>
      <h2>Change Theme</h2>
      <p>Current theme is {theme}</p>
      {/* <button onClick={changeTheme}>Dark Theme</button> */}
      <button onClick={() => changeTheme("Dark")}>Dark Theme</button>
      <button onClick={() => changeTheme("Light")}>Light Theme</button>
      <button onClick={() => changeTheme("Neutral")}>Neutral Theme</button>
    </div>
  );
}

export default Theme;
