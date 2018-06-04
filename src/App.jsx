import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import registerServiceWorker from "./registerServiceWorker";

import * as RoutesModule from "./components/common/Routes";
let routes = RoutesModule.routes;

function renderApp() {
    render(
        <AppContainer>
            <ErrorBoundary>
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </ErrorBoundary>
        </AppContainer>,
        document.getElementById("app")
    );
}

renderApp();

//Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept("./components/common/Routes", () => 
    { 
        routes = require("./components/common/Routes").routes;
        renderApp(); 
    });
}

//Allow Progressive Web App
registerServiceWorker();
