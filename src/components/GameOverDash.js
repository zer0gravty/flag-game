import React from 'react'

const replayBtnStyle = {
    borderRadius: '10%',
    backgroundColor: 'navy',
    color: 'white',
    border: '0px',
    padding: '0.4rem'
}

export const GameOverDash = ({ replayGame, winner }) => {
    if (winner) {
        return (
            <section>
                <h2>HOLY FUCKSTICK.</h2>
                <p>You beat the game. You are the flagmaster.</p>
                <p>Now, go fuck yourself.</p>
                <br />
            </section>
        )
    }    
    
    return (
            <section>
                <h3>The game is over.</h3>
                <button onClick={replayGame} style={replayBtnStyle}>Replay?</button>
            </section>
        )
}

export default GameOverDash;