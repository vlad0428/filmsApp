import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({id, year, title, summary, poster,genres}) {
    return <div className={'movie'}>
        <img src={poster} alt={title} title={title}/>
        <div className="movieColumn">
            <h3 className="movieTitle">{title}</h3>
            <h5 className="movieYear">{year}</h5>
            <p className="movieSummary">{summary}</p>
            <ul className="genres">
                {genres.map((genre,index) => {
                    return <li key={index} className={'genre'}>{genre}</li>
                })}
            </ul>
            <hr/>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie