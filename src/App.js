import './App.css';
import { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  let [data, setData] = useState([])

  useEffect(() => {
    setData({Title:"Avengers: Endgame",
    Year:"2019",
    imdbID:"tt4154796",
    Type:"movie",
    Poster:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg" },{Title:"Marvel Studios' Avengers: Endgame LIVE Red Carpet World Premiere",
    Year:"2019",
    imdbID:"tt10240638",
    Type:"movie",
    Poster:"https://m.media-amazon.com/images/M/MV5BNThjZDgwZTYtMjdmYy00ZmUyLTk4NTUtMzdjZmExODQ3ZmY4XkEyXkFqcGdeQXVyMjkzMDgyNTg@._V1_SX300.jpg"})
  },[])
  console.log(data)
  
  return (
    <div className="App">
      <Router>

      </Router>
    </div>
  );
}

export default App;
