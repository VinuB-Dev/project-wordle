import React from 'react'

const Banner = ({ gameStatus, numOfGuesses, answer }) => {
  if (gameStatus === 'win')
    return (
      <div class='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      </div>
    )

  return (
    <div class='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

export default Banner
