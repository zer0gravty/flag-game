import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Flag from './components/Flag';
import GuessInput from './components/GuessInput';
import Scoreboard from './components/Scoreboard';
import GameOverDash from './components/GameOverDash';
import GuessDisplay from './components/GuessDisplay';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [remainingCountries, setRemainingCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [flagInput, setFlagInput] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [answer, setAnswer] = useState('');
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then( response => {
        setCountries(response.data)
        const country = getRandomCountry(response.data);
        setAnswer(country.name);
        setCountry(country);
        setRemainingCountries(response.data.filter( ele => country.name !== ele.name ));
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

  const handleFlagInput = (event => setFlagInput(event.target.value));
  
  const handleFlagGuess = (event => {
    event.preventDefault();
    const guess = flagInput.toLowerCase();
    setGuess(guess);
    if (guess === answer.toLowerCase() || (answer.toLowerCase().startsWith(guess) && guess !== '')) {
      setScore(score + 1);
      if (score + 1 === countries.length) {
        setWinner(true);
        setGameOver(true);
        return;
      }

      
      const newCountry = getRandomCountry(remainingCountries);
      setCountry(newCountry);
      setAnswer(newCountry.name);
      setRemainingCountries(remainingCountries.filter(country => country.name !== newCountry.name));
      setCorrect(true);
    } else {
      setLives(lives - 1);
      setCorrect(false);
    }
    
    setDisplayAnswer(true);
    setTimeout(() => {
      setDisplayAnswer(false);
    }, 3000);

    setFlagInput('');
  });

  const handleReplay = () => {
    setGameOver(false);
    setWinner(false);
    setLives(3);
    setScore(0);
    const country = getRandomCountry(countries);
    setAnswer(country.name);
    setGuess('');
    setCountry(country);
    setRemainingCountries(countries.filter( ele => country.name !== ele.name ))
  };

  return (
    <main className="App">
      <h1>The Flag Game!</h1>
      {gameOver 
        ? <GameOverDash replayGame={handleReplay} winner={winner} />
        : <>
            <Flag country={country} />
            <GuessInput handleGuess={handleFlagGuess} value={flagInput} handleInput={handleFlagInput} />
            {/* {displayAnswer ? <GuessDisplay answer={answer} guess={guess} correct={correct} /> : <></>} */}
          </>}
      <Scoreboard score={score} lives={lives} answer={country.name} numCountries={remainingCountries.length} />
    </main>
  );
}

export default App;
