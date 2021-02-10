import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Flag from './components/Flag';
import GuessInput from './components/GuessInput';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [flagInput, setFlagInput] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [answer, setAnswer] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( response => {
        setCountries(response.data)
        const country = getRandomCountry(response.data);
        setAnswer(country.name);
        setCountry(country);
      });
    }, []);

  useEffect( () => {
    if (lives <= 0) {
      setGameOver(true);
    }
  }, [lives]);
    
  const getRandomCountry = (arrCountries) => {
    const randomCountry = Math.floor(Math.random() * arrCountries.length);
    return arrCountries[randomCountry];
  }

  let remainingCountries = countries.filter(country => country.name !== answer);

  const handleFlagInput = (event => setFlagInput(event.target.value));
  const handleFlagGuess = (event => {
    event.preventDefault();
    const guess = flagInput.toLowerCase();
    if (guess === answer.toLowerCase() || guess.startsWith(answer.toLowerCase())) {
      setScore(score + 1);
      const newCountry = getRandomCountry(remainingCountries);
      setCountry(newCountry);
      setAnswer(newCountry.name);
      remainingCountries = remainingCountries.filter(country => country.name !== newCountry.name);
      console.log(answer, remainingCountries.length);
    } else {
      setLives(lives - 1);
    }

    setFlagInput('');
  });


  return (
    <main className="App">
      <h1>The Flag Game!</h1>
      <Flag country={country} />
      <GuessInput handleGuess={handleFlagGuess} value={flagInput} handleInput={handleFlagInput} gameOver={gameOver} />
      <Scoreboard score={score} lives={lives} answer={country.name} />
    </main>
  );
}

export default App;
