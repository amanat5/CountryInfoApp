import React, { useState } from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import CountryDetail from "./CountryDetail";
import "../styles.css";

const CountryList = () => {
    const { list } = useSelector((state) => state.countries);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div className="country-list">
            {list.map((country) => (
                <CountryCard key={country.cca3} country={country} onSelect={handleSelectCountry} />
            ))}

            {selectedCountry && <CountryDetail country={selectedCountry} onClose={() => setSelectedCountry(null)} />}
        </div>
    );
};

export default CountryList;
