import React from 'react'

const formStyle = {
    margin: '1rem 0',
};

const guessBtnStyle = {
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

export const GuessInput = ({ handleGuess, value, handleInput }) => {    
    return (
        <section className="form-container" style={formStyle} >
            <form onSubmit={handleGuess}>
                <input type="text" placeholder="Enter guess..." value={value} onChange={handleInput} style={inputStyle} />
                <button style={guessBtnStyle} type="submit"> Guess? </button>
            </form>
        </section>
    )
}

export default GuessInput;