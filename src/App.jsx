import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
