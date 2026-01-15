import topNav from "./topNav.js";
import body from "./body.js";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render([topNav(), body()]);
