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
  const [yearValue, setYearValue] = useState([1930, 2021]);
  

  const getMovieRequest = async (searchValue, radioValue) => {
    const typeString = (radioValue !== 'Any') ? "&type="+radioValue : "";
    //for (y=yearValue[0]; y<=yearValue[1]; y++)
    const url =  `http://www.omdbapi.com/?s=${searchValue}${typeString}&apikey=dce48647`;
    console.log(url);
    const response = await fetch(url);
    
    // filteredResponse = response.filter(response => response)
    const responseJson = await response.json();
    const filteredResponse = responseJson.Search.filter(element => element.Year > yearValue[0] && element.Year < yearValue[1]);
    console.log("filtered respone ", filteredResponse);

    if (responseJson.Search) {
      
      setMovies(filteredResponse);
      setTotalResults(filteredResponse.length);
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
