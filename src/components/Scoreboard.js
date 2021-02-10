import React from 'react'

export const Scoreboard = ({ score, lives, answer }) => {
    if (lives <= 0) {
        return (
            <section>
                <h4>You lose, flaggot!</h4>
                <p>The answer was: {answer}</p>
                <p>Your final score was: {score}</p>
            </section>
        )
    }
    
    return (
        <section>
            <p>Current score: {score}</p>
            <p>Remaining Lives: {lives}</p>
        </section>
    )
}

export default Scoreboard;