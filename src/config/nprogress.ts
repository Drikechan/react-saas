import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Nprogress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: true,
  trickleSpeed: 200,
  minimum: 0.3,
});

export default Nprogress;
