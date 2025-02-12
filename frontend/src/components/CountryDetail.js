import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import "../styles.css";

const CountryDetail = ({ country, onClose }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCountryDetails = async () => {
            setLoading(true);
            setError("");
            try {
                console.log("Fetching country details for:", country.cca3);
                const response = await axios.get(`http://localhost:5000/api/countries/${country.cca3}`);
                console.log("API Response:", response.data);
                setDetails(response.data);
            } catch (err) {
                console.error("Error fetching country details:", err);
                setError("Failed to load country details.");
            }
            setLoading(false);
        };

        fetchCountryDetails();
    }, [country]);

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>

                {loading && <LoadingSpinner />}
                {error && <p className="error-message">{error}</p>}

                {details && (
                    <>
                        <h2>{details.name?.common || "N/A"}</h2>
                        <p><strong>Official Name:</strong> {details.name?.official || "N/A"}</p>
                        <p><strong>Capital:</strong> {details.capital?.[0] || "N/A"}</p>
                        <p><strong>Region:</strong> {details.region || "N/A"}</p>
                        <p><strong>Subregion:</strong> {details.subregion || "N/A"}</p>
                        <p><strong>Languages:</strong> {details.languages ? Object.values(details.languages).join(", ") : "N/A"}</p>
                        <p><strong>Population:</strong> {details.population?.toLocaleString() || "N/A"}</p>
                        <p><strong>Currency:</strong> {details.currencies ? 
                            Object.values(details.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(", ") : "N/A"}</p>
                        {details.flags && <img src={details.flags.png} alt="Country Flag" className="flag-image" />}
                    </>
                )}
            </div>
        </div>
    );
};

export default CountryDetail;
