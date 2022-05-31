import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [ totalResults, setTotalResults ]= useState("");
  const [ radioValue, setRadioValue ]= useState('Any');
  const [yearValue, setYearValue] = useState([1970, 1985]);
  

  const getMovieRequest = async (searchValue, radioValue) => {
    const typeString = (radioValue !== 'Any') ? "&type="+radioValue : "";

    const url =  `http://www.omdbapi.com/?s=${searchValue}${typeString}&apikey=31e98962
`;
    //console.log(url);
    const response = await fetch(url);
    
    
    // filteredResponse = response.filter(response => response)
    const responseJson = await response.json();
    const pages = Math.ceil((responseJson.totalResults)/10)
    let allMovies = [];
    console.log("pages", pages)


    for (let i=1; i<=pages; i++) {
      const responses = await fetch(`http://www.omdbapi.com/?s=${searchValue}${typeString}&page=${i}&apikey=31e98962`)
      const responsesJson = await responses.json();
      // console.log("responsesJson.search", responsesJson.Search)
      allMovies = allMovies.concat(responsesJson.Search);
      // console.log("Allmovies", allMovies);
    }
    // console.log("allMovies, ", allMovies.length);
    const filteredMovies = allMovies.filter(element => element.Year > yearValue[0] && element.Year < yearValue[1]);
    console.log("filtered Movies ", filteredMovies);

    if (allMovies) {
      
      setMovies(filteredMovies);
      setTotalResults(filteredMovies.length);
    }
    else {
      setMovies([])
      setTotalResults("0")
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue, radioValue, yearValue);
  }, [searchValue, radioValue, yearValue]);


  return (
  <div>
    <Navbar searchValue={searchValue} setSearchValue={setSearchValue} radioValue={radioValue} setRadioValue={setRadioValue} yearValue={yearValue} setYearValue={setYearValue}/>
    <Movies totalResults={totalResults} setTotalResults={setTotalResults} movies={movies} className="column"/>
  </div>
  );
};

export default App;
