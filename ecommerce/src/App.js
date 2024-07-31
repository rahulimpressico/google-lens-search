import './App.css';
import { Category } from './components/Category';
import { ProductDetails } from './components/ProductDetails';
import { Home } from './Home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <section>
              <Home />
            </section>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
