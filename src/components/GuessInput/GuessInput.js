import React from 'react'

const GuessInput = ({ handleGuessAddition, disabled }) => {
  const [guess, setGuess] = React.useState('')

  const handleInput = (e) => {
    setGuess(e.target.value.toUpperCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleGuessAddition(guess)
    setGuess('')
  }

  return (
    <form onSubmit={handleSubmit} className={'guess-input-wrapper'}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        value={guess}
        disabled={disabled}
        type={'text'}
        pattern='\w{5,5}'
        title='5 letter word'
        required
        onChange={handleInput}
        style={{ backgroundColor: 'white' }}
      />
    </form>
  )
}

export default GuessInput
