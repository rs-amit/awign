import React, { useState } from "react";
import "./Home.css";
import AsyncSelect from "react-select/async";
import { debounce } from "../components/Debounce";
import axios from "axios";
import Cart from "../components/Cart/Cart";


const selectBoxStyles = {
  dropdownIndicator: () => ({
    color: "black",
    margin: "0 7px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menuList: () => ({
    maxHeight: "600px",
    overflow: "auto",
  }),
};

function Home() {
  const [selectSearchedData, setSelectSearchedData] = useState(null);


  const searchRepoOptions = async (keyword, callback) => {
    axios
      .get(`https://api.github.com/search/repositories`, {
        params: {
          q: (keyword || "").toLowerCase(),
        },
      })
      .then((res) => {
        callback(res.data.items?.length && res.data.items);
      })
      .catch((err) => {
        console.groupCollapsed("%cUser/talent=>schools", "color:red");
        console.error(err);
        console.groupEnd();
        callback([]);
      });
  };


  return (
    <div className="home">
      <div className="home-container">
        <div className="home-wrapper">
          <AsyncSelect
            className="inputField"
            value={selectSearchedData}
            loadOptions={debounce(searchRepoOptions, 300)}
            name="companyName"
            placeholder="Search for repositories"
            type="text"
            getOptionValue={(val) => val}
            getOptionLabel={(val) => (val.name ? <Cart val={val} /> : null)}
            styles={selectBoxStyles}
            onChange={(option)=>setSelectSearchedData(option)}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
