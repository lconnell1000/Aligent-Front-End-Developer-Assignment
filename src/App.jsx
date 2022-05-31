import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [ totalResults, setTotalResults ]= useState("")
  const [ radioValue, setRadioValue ]= useState('Any')
  

  const getMovieRequest = async (searchValue, radioValue) => {
    const typeString = (radioValue !== 'Any') ? "&type="+radioValue : "";
    const url =  `http://www.omdbapi.com/?s=${searchValue}${typeString}&apikey=dce48647`;
   // console.log(url);
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {

      setMovies(responseJson.Search)
      setTotalResults(responseJson.totalResults)
    }
    else {
      setMovies([])
      setTotalResults("0")
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue, radioValue);
  }, [searchValue, radioValue]);

  return (
  <div>
    <Navbar searchValue={searchValue} setSearchValue={setSearchValue} radioValue={radioValue} setRadioValue={setRadioValue}/>
    <Movies totalResults={totalResults} setTotalResults={setTotalResults} movies={movies} className="column"/>
  </div>
  );
};

export default App;
