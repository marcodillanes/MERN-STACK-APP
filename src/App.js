import './App.css';
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Gallery } from './components/gallery'

function App() {
  let [data, setData] = useState([])

  useEffect(() => {
    setData([
      {Title:"Avengers: Endgame",
      Year:"2019",
      imdbID:"tt4154796",
      Type:"movie",
      Poster:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      Genre:"action" 
      },
      {Title:"Rubber",
      Year:"2010",
      imdbID:"tt1612774",
      Type:"movie",
      Poster:"https://m.media-amazon.com/images/M/MV5BZTY2NTY4MzctMWNkYy00NWM4LTliOWQtMWExZDU1ZWQxNTQxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      Genre:"horror"
      }])
  },[])
  console.log(data)
  
  return (
    <div className="App">
      <Router>
        <Gallery data={data} />
      </Router>
    </div>
  );
}

export default App;
