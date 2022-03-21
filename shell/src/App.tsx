import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import the router from the subscriptions micro frontend
// @ts-ignore
const FleetRouter = lazy(() => import("fleet/FleetRouter"));

const App = () => (
  <BrowserRouter>
    <header>Header</header>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        {/* Render the micro frontend on its path */}
        <Route path="/fleet" element={<FleetRouter />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
