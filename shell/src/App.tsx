import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import RemoteComponentWrap from "./RemoteComponentWrap";

// import the router from the subscriptions micro frontend
// @ts-ignore
const FleetRouter = lazy(() => import("fleet/FleetRouter"));
// @ts-ignore
const Button = lazy(() => import("financial/Button"));

const App = () => (
  <BrowserRouter>
    <header>Header from host</header>

    <main>
      <RemoteComponentWrap>
        <FleetRouter />
      </RemoteComponentWrap>
      <RemoteComponentWrap>
        <Button />
      </RemoteComponentWrap>
    </main>
  </BrowserRouter>
);

export default App;
