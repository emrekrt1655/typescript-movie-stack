import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useStore} from "./context/StoreContext"
import Navbar from "./components/Navbar"

function App() {
  const movieList = useStore()
 console.log(movieList?.movieList)

  React.useEffect(() => {
    movieList.getMovies()
  }, [])


  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
