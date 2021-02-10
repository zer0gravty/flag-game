import React from 'react'

export const GuessDisplay = ({ answer, guess, correct }) => {
    if (correct) {
        return (
            <div>
                <p style={{color: 'green'}}>{answer} is correct!</p>
            </div>
        )
    }

    return (
        <div>
            <p style={{color: 'red'}}>{guess} is so wrong. Pathetic.</p>
        </div>
    )
}

export default GuessDisplay;