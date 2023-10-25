import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BeerList from "./pages/BeerList";
import BeerDetail from "./pages/BeerDetail";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<BeerList />} />
          <Route path="/beers/:_id" element={<BeerDetail />} />
          <Route path="/beers/random/:_id" element={<RandomBeer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
