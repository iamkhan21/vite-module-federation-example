import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// import the router from the subscriptions micro frontend
// @ts-ignore
const FleetRouter = lazy(() => import("fleet/FleetRouter"));
// @ts-ignore
const Button = lazy(() => import("financial/Button"));

const App = () => (
  <BrowserRouter>
    <header>Header</header>

    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <FleetRouter />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </main>
  </BrowserRouter>
);

export default App;
