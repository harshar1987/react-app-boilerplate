import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
  return  <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-film fa-2x text-white my-auto"></i>
                <div className="h3 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>;
};

Header.propTypes = {
    title: PropTypes.string
};

