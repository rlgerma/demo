import * as React from "react";
import ReactDOM from "react-dom";

import App from "./app";

import * as serviceWorkerRegistration from "./utils/serviceWorkerRegistration";

import "index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
