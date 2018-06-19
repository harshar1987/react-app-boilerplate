import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import "./i18n";
render(<App />, document.getElementById("app"));

//Allow Progressive Web App
registerServiceWorker();