import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [totalResults, setTotalResults] = useState("");
  const [radioValue, setRadioValue] = useState("Any");
  const [yearValue, setYearValue] = useState([1930, 2021]);
  const [searching, setSearching] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

  const getMovieRequest = async (searchValue, radioValue) => {
    setSearching(true);
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=31e98962`;

    const response = await fetch(url);

    const responseJson = await response.json();
    //figure out the total number of pages that the search has
    const pages = Math.ceil(responseJson.totalResults / 10);
    let allMovies = [];
    //then create an allMovies array that contains the results form all pages
    for (let i = 1; i <= pages; i++) {
      const responses = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&page=${i}&apikey=31e98962`
      );
      const responsesJson = await responses.json();

      allMovies = allMovies.concat(responsesJson.Search);
    }
    setAllMovies(allMovies);
    filterMovies(allMovies);
    setSearching(false);
    //then filter the movies based on the year they were made
  };

  const filterMovies = (moviesToFilter) => {
    let filteredMovies = moviesToFilter.filter(
      (element) => element.Year > yearValue[0] && element.Year < yearValue[1]
    );

    if (radioValue !== "Any") {
      filteredMovies = filteredMovies.filter(
        (element) => element.Type === radioValue
      );
    }
    const totalMovies = filteredMovies.length;
    //only want 20 movies to render on page
    filteredMovies.splice(20);

    if (moviesToFilter) {
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

  useEffect(() => {
    filterMovies(allMovies);
  }, [radioValue, yearValue]);

  const saveToLocal = (items) => {
    localStorage.setItem("react-movie-app-watchlist", JSON.stringify(items));
  };

  const addWatchlistMovie = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveToLocal(newWatchlist);
  };

  const removeWatchlistMovie = (movie) => {
    console.log("watchlistlengt", watchlist.length);
    console.log("movie.imdbId", movie);
    const newWatchlist = watchlist.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    console.log("newWatchlist", newWatchlist);
    setWatchlist(newWatchlist);
    saveToLocal(newWatchlist);
  };

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
        searching={searching}
        setSearching={setSearching}
      />
      <Watchlist
        movies={watchlist}
        removeWatchlistMovie={removeWatchlistMovie}
      />
      <Movies
        totalResults={totalResults}
        setTotalResults={setTotalResults}
        movies={movies}
        addWatchlistMovie={addWatchlistMovie}
      />
    </div>
  );
};

export default App;
