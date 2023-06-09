import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfoBar.css';

const MovieInfoBar = ({ revenue, budget, runtime }) => {

    const formatNumber = number => {

        if (number === 0) {
            return "Bilgi Yok"
        }
        else {
            return new Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
            }).format(number)
        }
    }

    const formatTime = time => {
        const hours = Math.floor(time / 60);
        const mins = time % 60;
        return `${hours}s ${mins}dk`;
    }

    return (
        <div className="pt-3 d-flex justify-content-around align-items-center text-center movie-bar">
            <div>
                <i className="fas fa-money-bill-alt fa-3x mb-2"></i>
                <h5>Budget: <span>{formatNumber(budget)}</span> </h5>
            </div>
            <div>
                <i className="fas fa-hand-holding-usd fa-3x mb-2"></i>
                <h5>Income: <span> {formatNumber(revenue)} </span> </h5>
            </div>
            <div>
                <i className="fas fa-hourglass-half fa-3x mb-2"></i>
                <h5>Movie Time: <span>{formatTime(runtime)}</span> </h5>
            </div>
        </div>
    )
}

MovieInfoBar.propTypes = {
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;
