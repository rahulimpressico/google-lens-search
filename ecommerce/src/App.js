import './App.css';
import { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from './components/Category/js/Category';
import { ProductDetails } from './components/ProductDetails/js/ProductDetails';
import { Home } from './Home/home';
import { NavBar } from './Navbar/Navbar';
import { Footer } from './components/footer';
import { searchProductByText } from './api'; // Adjust the path as needed
import { SearchResults } from './components/SearchResult/js/SearchResult';

function App() {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const debounceTimeout = useRef(null);

  const handleSearchChange = (text) => {
    console.log(text)
    setSearchText(text);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      if (text.length > 2) {
        try {
          const response = await searchProductByText(text);
          setResults(response.results); // Assuming response.results contains the search results
        } catch (error) {
          console.error('Error during search:', error);
          setResults([]);
        }
      } else {
        setResults([]);
      }
    }, 200); // Adjusted debounce time to 300ms for better UX
  };


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onSearchResults={handleSearchChange} />

        <Routes>
          <Route path="/" element={
            results.length > 0 ? (
              <SearchResults results={results} />
            ) : (
              <section>
                <Home />
              </section>
            )
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
