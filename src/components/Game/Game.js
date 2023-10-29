import React from 'react'

import { range, sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessResult from '../GuessResult/GuessResult'
import Banner from '../Banner/Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running')
  const [guessList, setGuessList] = React.useState([])

  const handleGuessAddition = (newGuess) => {
    const newGuessList = [...guessList, newGuess]
    setGuessList(newGuessList)
    if (newGuess === answer) setGameStatus('win')
    else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED)
      setGameStatus('lose')
  }
  return (
    <>
      <div class='guess-results'>
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <GuessResult value={guessList[num]} key={num} answer={answer} />
        ))}
      </div>
      <GuessInput
        handleGuessAddition={handleGuessAddition}
        disabled={gameStatus !== 'running'}
      />
      {gameStatus !== 'running' && (
        <Banner
          gameStatus={gameStatus}
          numOfGuesses={guessList.length}
          answer={answer}
        />
      )}
    </>
  )
}

export default Game
