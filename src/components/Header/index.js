import React from 'react';
import PropTypes from 'prop-types';
import './style/header.scss';

const Header = ({title}) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <div className="h3 ml-3 my-auto text-light" href="/">{title}</div>
            </div>
        </div>
    </nav>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;