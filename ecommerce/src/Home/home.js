import React, { useRef, useState } from 'react';
import ProductCard from '../components/ProductCard/js/ProductCard';
import { NavBar } from '../Navbar/Navbar';
import { Frontpage } from "../components/FrontPage/js/front-page";
import { SearchResults } from '../components/SearchResult/js/SearchResult';
import { searchProductByText } from '../api'; // Adjust the path as needed






export const Home = () => {
    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState('');
    const debounceTimeout = useRef(null);

    const handleSearchChange = (text) => {
        setSearchText(text);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(async () => {
            if (text.length > 2) {
                try {
                    const response = await searchProductByText(text);
                    setResults(response.results); // Assuming response.data contains the results
                } catch (error) {
                    console.error('Error during search:', error);
                    setResults([]);
                }
            } else {
                setResults([]);
            }
        }, 200);
    };

    return (
        <>
            <NavBar onSearchResults={handleSearchChange} />
            {results.length > 0 ? (
                <div className="search-results-container">
                    <SearchResults results={results} />
                </div>
            ) : (
                <>
                    <Frontpage />
                    <div className="home">
                        <div className="products-grid">
                            <ProductCard />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};