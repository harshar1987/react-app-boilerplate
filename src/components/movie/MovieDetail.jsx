import React from "react";
import { MovieService } from "../../lib/services/MovieService";

function Repeat(props) {

    let items = [];
    const movieDetail = props.movieData;
    for (const key in movieDetail) {
        if (movieDetail.hasOwnProperty(key)) {
            items.push(props.children(key));
        }
    }

    return <div>{items}</div>;
}

export const MovieDetail = (props) => {

    const movieId = props.location.state.movieId;
    const movieDetail = MovieService.getMovieById(movieId);

    return <Repeat movieData={movieDetail} >
        {
            (key) => <div key={key} className="row" style={{padding: "20px"}}>
                        <div className="col-sm-4 clear-fix" style={{ backgroundColor: "lavender", textAlign: "center" }}>{key}</div>
                        <div className="col-sm-4 clear-fix" style={{ backgroundColor: "lavender", textAlign: "center", overflow:"hidden" }}>{movieDetail[key]}</div>
                    </div>
        }
    </Repeat>;
};