import React, { Suspense } from "react";
import FleetRouter from "./FleetRouter";

const App = () => (
  <Suspense fallback={null}>
    <FleetRouter />
  </Suspense>
);
export default App;
