import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [totalResults, setTotalResults] = useState("");
  const [radioValue, setRadioValue] = useState("Any");
  const [yearValue, setYearValue] = useState([1930, 2021]);

  const getMovieRequest = async (searchValue, radioValue) => {
    const typeString = radioValue !== "Any" ? "&type=" + radioValue : "";

    const url = `http://www.omdbapi.com/?s=${searchValue}${typeString}&apikey=31e98962`;

    const response = await fetch(url);

    const responseJson = await response.json();
    //figure out the total number of pages that the search has
    const pages = Math.ceil(responseJson.totalResults / 10);
    let allMovies = [];
    //then create an allMovies array that contains the results form all pages
    for (let i = 1; i <= pages; i++) {
      const responses = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}${typeString}&page=${i}&apikey=31e98962`
      );
      const responsesJson = await responses.json();

      allMovies = allMovies.concat(responsesJson.Search);
    }
    //then filter the movies based on the year they were made
    const filteredMovies = allMovies.filter(
      (element) => element.Year > yearValue[0] && element.Year < yearValue[1]
    );
    const totalMovies = filteredMovies.length;
    //only want 20 movies to render on page
    filteredMovies.splice(20);

    if (allMovies) {
      setMovies(filteredMovies);
      setTotalResults(totalMovies);
    } else {
      setMovies([]);
      setTotalResults("0");
    }
  };
  //function for when the user clicks the search icon
  const onSearch = () => {
    getMovieRequest(searchValue, radioValue, yearValue);
  };

  //function for when the user changes any of the filters other than search
  //had to have searchvalue seperate as the page made too many requests and 
  //rendered even more slowly if i had search in the useEffect
  useEffect(() => {
    getMovieRequest(searchValue, radioValue, yearValue);
  }, [radioValue, yearValue]);

  return (
    <div>
      <Navbar
        onSearch={onSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        radioValue={radioValue}
        setRadioValue={setRadioValue}
        yearValue={yearValue}
        setYearValue={setYearValue}
      />
      <Movies
        totalResults={totalResults}
        setTotalResults={setTotalResults}
        movies={movies}
      />
    </div>
  );
};

export default App;
