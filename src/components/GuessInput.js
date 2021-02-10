import React from 'react'

const formStyle = {
    margin: '1rem 0',
};

const btnStyle = {
    padding: '0.3rem',
    marginLeft: '4px',
    borderRadius: '10%',
    backgroundColor: 'red',
    border: '0px',
    color: 'white'
};

const inputStyle = {
    border: '1px solid black',
    padding: '0.2rem'
}

export const GuessInput = ({ handleGuess, value, handleInput, gameOver }) => {
    if (gameOver === true) {
        return (
            <section>
                <h3>The game is over.</h3>
                {/* <button onSubmit={()=>{}}>Replay?</button> */}
            </section>
        )
    }
    
    return (
        <section className="form-container" style={formStyle} >
            <form onSubmit={handleGuess}>
                <input type="text" placeholder="Enter guess..." value={value} onChange={handleInput} style={inputStyle} />
                <button style={btnStyle} type="submit"> Guess? </button>
            </form>
        </section>
    )
}

export default GuessInput;