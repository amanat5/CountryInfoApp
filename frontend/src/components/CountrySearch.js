import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/countrySlice";
import { Search } from "lucide-react"; 
import "../styles.css"; 

const CountrySearch = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (query.trim()) dispatch(fetchCountries(query));
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter a country..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                    <Search size={18} /> Search
                </button>
            </div>
        </div>
    );
};

export default CountrySearch;
