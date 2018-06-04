import React from "react";
import PropTypes from "prop-types";
import RatingStyles from "../../styles/components/rating.css";

const width = 110;
const styles =
    {
        starsInner: {
            width: `${width}px`,
            display: "inline"
            
        },
        starsOuter: {
            overflow: "hidden"
        },
        star: {
            padding: "1px",
        }
    };

const cropWidth = (rating) => {
    return Math.floor((rating) * (width / 5));
};


function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div style={styles.starsInner}>{items}</div>;
}

export const StarRating = (props) => {
    
    const containerStyle = { width: `${cropWidth(props.rating)}px`, textAlign: "center" };
    const cropRating = Math.floor(props.rating / 2 );
    const totalStars = 5;
    
    /* eslint-disable quotes */
    const solidStarCss = `fas fa-star fa-lg ${RatingStyles.faStarGolden}`;
    const emptyStarCss = `far fa-star fa-lg ${RatingStyles.faStarGolden}`;

    return (
        <div style={styles.starsOuter}>
            <div style={containerStyle}>
                <Repeat numTimes={cropRating}>
                    {(index) => <i key={index} className={solidStarCss} style={styles.star}></i>}
                </Repeat>
                <Repeat numTimes={totalStars - cropRating} >
                    {(index) => <i key={index} className={emptyStarCss} style={styles.star}></i>}
                </Repeat>
            </div>
        </div>
    );
};

StarRating.defaultProps = {
    rating: 0
};

StarRating.propTypes = {
    rating: PropTypes.number
};
