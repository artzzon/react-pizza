import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import "./scss/app.scss";

type SearchContextType = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export type PaginationContextType = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

export const SearchContext = React.createContext<SearchContextType | null>(
  null
);
export const PaginationContext =
  React.createContext<PaginationContextType | null>(null);

const App: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);

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
};

export default App;
