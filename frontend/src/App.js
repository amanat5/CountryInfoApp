import React from "react";
import CountrySearch from "./components/CountrySearch";
import CountryList from "./components/CountryList";
import "./styles.css"; 

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Country Info App</h1>
      <div className="search-results-container">
        <CountrySearch />
        <CountryList /> 
      </div>
    </div>
  );
};

export default App;
