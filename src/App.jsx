//import React from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import "./scss/app.scss";

export const SortContext = React.createContext("title");
export const SearchContext = React.createContext("");
export const PaginationContext = React.createContext({});

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
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
      </PaginationContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
