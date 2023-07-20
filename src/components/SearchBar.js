import React, { useState } from "react";

const SearchBar = ({ setResults, rocketsGhene }) => {
    
   const [input, setInput] = useState([]);

    const handleChange = (value) => {
        setInput(value);
        rocketsGhene(value);
    };


 const BarStyle = {
    width: "40rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
    marginTop: "2%",
  };
  return (
    <input
      className="search-bar"
      style={BarStyle}
      key="search-bar"
      value={input}
      placeholder={"Search Items"}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default SearchBar;
