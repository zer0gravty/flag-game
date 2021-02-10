import React from 'react'

const flagStyle = {
    width: "60vw",
    height: "40vh",
    border: '1px solid black',
    padding: '0.2rem'
};

export const Flag = ({ country }) => {
    if (country) {
        return (
            <div className="flag-container">
                <img src={country.flag} alt="No cheating!" style={flagStyle} />
            </div>
        )
    } else {
        return (
            <div className="empty-flag-container">
                <p>Loading...</p>
            </div>
        )
    }
}

export default Flag;