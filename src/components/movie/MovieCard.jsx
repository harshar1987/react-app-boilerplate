import React from "react";
import PropTypes from "prop-types";
import { StarRating } from "./StarRating";
import MovieCardStyles from "../../styles/components/movie/movieCard.css";
import { MovieInfo } from "./MovieInfo";
import { MovieCardClassNames } from "./styles/MovieCard-Style";

export const MovieCard = (props) => {

    const rating = Number(props.movie.rating);
    
    const cardDescriptionStyle = {
        fontSize: "14px",
        overflow: "hidden",
        height: "200px",
        textOverflow: "ellipsis"
    };
    
    return <div className={MovieCardStyles.movieCard}>
        <div className={MovieCardStyles.movieCard} style={{ height: "450px" }}>
            <div style={{ padding: "1.25rem" }}><img className={MovieCardClassNames.cardImgTop} src={props.movie.poster} alt="" style={{ height: "400px" }} /></div>
            <div className={MovieCardClassNames.cardBody}>
                <h4 className={MovieCardClassNames.cardTitle}>{props.movie.title} ({props.movie.year})</h4>
                <h6 className={MovieCardClassNames.cardSubTitle}>{props.movie.genre}</h6>
                <p className={MovieCardClassNames.cardDescription} style={cardDescriptionStyle}>
                    <b>Plot:</b> {props.movie.plot}
                </p>
            </div>
            <div className={MovieCardClassNames.cardFooter}>
                <div className={MovieCardClassNames.clearFix}>
                    <div className={MovieCardClassNames.starRating}>
                        <StarRating rating={rating} />
                    </div>
                    <div className={MovieCardClassNames.starRatingNumber} style={{ fontSize: "1rem" }}>{rating}</div>
                </div>
                <div className={MovieCardClassNames.clearFix}><MovieInfo id={props.movie.imdb_id} /></div>
            </div>
        </div>
    </div>;
};

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};
