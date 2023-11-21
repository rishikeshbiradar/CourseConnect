import "./search_explore.css";
import searchpng from "./search.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import loading1 from "../../../Animation4.json";
import { useSearchParams, useNavigate, createSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import NavbarEg from "../../Homeeg/NavbarEg";
import Downnav from "./Downnav";

const Search_Explore = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [query] = useSearchParams();

  const fetchData = async (page) => {
    const response = await axios.get(
      `https://courseconnectapi-production.up.railway.app/api/courses?page=${page}`
    );
    return response.data.Courses;
  };

  const optimizeFetchData = async () => {
    try {
      setIsLoading(true);

      const promises = [];
      for (let i = 1; i <= 311; i++) {
        promises.push(fetchData(i));
      }

      const results = await Promise.all(promises);
      const dummyData = results.reduce((acc, data) => [...acc, ...data], []);

      if (query.get("q")) {
        const response = await axios.post("http://127.0.0.1:8000", {
          text: query.get("q"),
        });

        const fetchedData = response.data;
        const valuesArray = Object.values(fetchedData);
        const final_data = dummyData.filter((dummyD) =>
          valuesArray.some((value) => value === dummyD.ID)
        );
        setData(final_data);
      } else {
        setData(dummyData);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
      console.log("Loading completed !");
    }
  };


  const handleClick = (e) => {
    e.stopPropagation();
    alert("Hello");
  
    const sanitizedInput = searchQuery.trim().toLowerCase();
  
    if (sanitizedInput.length > 0 && !searchHistory.includes(sanitizedInput)) {
      const updatedHistory = [sanitizedInput, ...searchHistory.slice(0, 4)];
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      setSearchHistory(updatedHistory);
    }
  
    navigate(`/get_started/search?q=${searchQuery}`);
    setSearchQuery("");
  };

  const handleFocus = (e) => {
    e.stopPropagation();
    setIsSearch(true);
  };

  const handleSearchscreenClick = (e) => {
    e.stopPropagation();
    if (isSearch) {
      if (e.target.classList.contains("button-81")) {
      } else if (e.target.classList.contains("search-history-items")) {
      } else if (e.target.classList.contains("search-history")) {
      } else if (e.target.classList.contains("delete-history-item")) {
      } else {
        setIsSearch(false);
      }
    }
  };

  const handleBtnClick = (buttonValue) => {
    navigate(`/get_started/search?q=${buttonValue}`);
  };

  useEffect(() => {
    optimizeFetchData();
  }, [query]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedHistory) {
      setSearchHistory(storedHistory);
    }
  }, []);

  const deleteHistoryItem = (e, itemToDelete) => {
    e.stopPropagation();
    const updatedHistory = searchHistory.filter(
      (item) => item !== itemToDelete
    );
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
  };

  const handleHistoryClick = (value) => {
    setIsLoading(true);
    const joinedHistory = searchHistory.join(" ");
    navigate(`/get_started/search?q=${searchQuery}`);
  };

  return (
    <div className="search-explore-wrapper">
      <NavbarEg />
      <h1>{data.length}</h1>
      <div
        className="explore_search"
        onClick={(e) => handleSearchscreenClick(e)}
      >
        <div className="input_search">
          <input
            type="search"
            placeholder="Search Here..."
            style={{ fontSize: "1.4rem", padding: "5px" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => handleFocus(e)}
          />
          <button
            onClick={(e) => handleClick(e)}
            style={{
              outline: "none",
              border: "none",
            }}
          >
            <img src={searchpng} className="search_icon" alt="" />
          </button>
        </div>

        <div className="explore_search_bottom">
          {!isSearch ? (
            <div className="sort-display">
              <div className="search-sorting">
                <select>
                  <option>Featured</option>
                  <option>Ratings : High to Low</option>
                  <option>Number of Enrollements : High to Low</option>
                </select>
              </div>

              {isLoading ? (
                <div className="loading-img">
                  {<Lottie animationData={loading1} />}
                </div>
              ) : (
                <div className="search-display">
                  {data.map((d, index) => (
                    <SearchCard key={index} data={d} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="search-screen">
              <div className="search-screen-sub">
                <div className="search-history">
                  {searchHistory.map((his) => (
                    <p
                      key={his}
                      className="search-history-items"
                      onClick={() => handleHistoryClick(his)}
                    >
                      {his}{" "}
                      <span
                        className="delete-history-item"
                        onClick={(e) => deleteHistoryItem(e, his)}
                      >
                        X
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="search-domains">
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Data Science")}
                >
                  Data Science
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick(" Software Engineering")}
                >
                  Software Engineering
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Data Science")}
                >
                  Data Structure
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Machine Learning")}
                >
                  Machine Learning
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Finance")}
                >
                  Finance
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Artificial Intelligence")}
                >
                  Artificial Intelligence
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Web Development")}
                >
                  Web Development
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Marketing")}
                >
                  Marketing
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Business")}
                >
                  Business
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Cloud Computing")}
                >
                  Cloud Computing
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("DevOps")}
                >
                  DevOps
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Soft Skills")}
                >
                  Soft Skills
                </button>
                <button
                  className="button-81"
                  role="button"
                  onClick={() => handleBtnClick("Presentation")}
                >
                  Presentation
                </button>
              </div>
            </div>
          )}
        </div>
        <div style={{ position: "fixed", bottom: "0px" }}>
          <Downnav />
        </div>
      </div>
    </div>
  );
};

export default Search_Explore;