import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

const GuessResult = ({ value, answer }) => {
  const result = checkGuess(value, answer)
  return (
    <>
      <p className='guess'>
        {range(5).map((num) => {
          // we always know it's a 5 word cell
          return (
            <span
              class={`${
                result && result[num].status
                  ? 'cell ' + result[num].status
                  : 'cell'
              }`}
              id={num}
            >
              {value ? value[num] : undefined}
            </span>
          )
        })}
      </p>
    </>
  )
}

export default GuessResult
