import React, { Component } from "react";
import { Redirect} from "react-router-dom";
import MovieInfoStyles from "../../styles/components/movie/movieInfo.css";


class MovieInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            movieId: props.id
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ redirect: true });
    }

    renderButton() {
        const btnClass = `btn btn-info ${MovieInfoStyles.movieInfoBtn}`;
        return (
            <div style={{ float: "right", paddingTop: "5px" }}>
                <button type="button" className={btnClass} onClick={this.handleClick}>
                    <i>More Info...</i>
                </button>
            </div>
        );
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={{ pathname: "/detail", state: this.state }} />;
        }

        return this.renderButton();
    }
}

export default MovieInfo;

