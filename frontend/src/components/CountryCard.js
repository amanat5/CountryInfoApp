import React from "react";
import "../styles.css";

function CountryCard({ country, onSelect }) {
    return (
        <div className="country-card" onClick={() => onSelect(country)}>
            <img src={country.flags.svg} alt={country.name.common} className="country-flag" />
            <h2 className="country-name">{country.name.common}</h2>
            <p className="country-info">Population: {country.population.toLocaleString()}</p>
            <p className="country-info">Region: {country.region}</p>
        </div>
    );
}

export default CountryCard;
