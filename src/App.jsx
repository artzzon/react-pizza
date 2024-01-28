//import React from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import "./scss/app.scss";

export const CategoryContext = React.createContext(0);
export const SortContext = React.createContext("title");
export const SearchContext = React.createContext("");
export const PaginationContext = React.createContext({});

function App() {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [openSort, setOpenSort] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const sortObjNames = {
    "популярности ↑": "rating",
    "популярности ↓": "-rating",
    "цене ↑": "price",
    "цене ↓": "-price",
    "алфавиту ↑": "title",
    "алфавиту ↓": "-title",
  };
  const sortNames = Object.keys(sortObjNames);
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
      <SortContext.Provider
        value={{
          openSort,
          setOpenSort,
          selectedSort,
          setSelectedSort,
          sortNames,
          sortObjNames,
        }}
      >
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
      </SortContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
