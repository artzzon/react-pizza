//import React from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import "./scss/app.scss";

export const CategoryContext = React.createContext(0);
function App() {
  const [activeCategory, setActiveCategory] = React.useState(0);
  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
