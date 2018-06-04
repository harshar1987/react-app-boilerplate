import React from "react";
import { Header } from "./Header";
import { Movies } from "./movie/Movies";
import "../styles/site.css";

export const Home = (props) => {
    
    return (
        <div>
            <Header title={props.headerTitle} />
            <div className="mt-5">
                <Movies />
            </div>
        </div>
    );
};

Home.defaultProps = {
    headerTitle: "Movie Cards"
};