import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [ totalResults, setTotalResults ]= useState("")

  const getMovieRequest = async (searchValue) => {
    const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=dce48647`
    
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search)
      setTotalResults(responseJson.totalResults)
    }
    
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
  <div>
    <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
    <Movies totalResults={totalResults} setTotalResults={setTotalResults} movies={movies} className="column"/>
  </div>
  );
};

export default App;
