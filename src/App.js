import "./App.css";
import React from "react";
import BannerSection from "./components/BannerSection";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import Rockets from "./components/items/Rockets";

function App() {
  const [data, setData] = useState([]);

  const getRockets = (recievedUserInput) => {
    axios.get("https://api.spacexdata.com/v3/missions").then((res) => {
      let arr = res.data;
      arr = arr.filter((item) => item.mission_name.toLowerCase().includes(recievedUserInput));
      setData(arr);
      console.log(arr);
    });
  };

  useEffect(() => {
    getRockets();
  }, []);

  return (
    <div>
      <Navbar />
      <BannerSection />
      <div style={{ margin: "auto", padding: "5%" }}>
        <SearchBar rocketsGhene={getRockets} />
        {data?.map((item) => (
          <Rockets mission={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
