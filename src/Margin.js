import React from 'react';
import PropTypes from 'prop-types';

const Margin = ({ size = 1 }) => {
    const style = {
        margin: `${size}em`,
    };

    return (
        <div style={style}></div>
    );
};

// PropTypes to ensure size is a number
Margin.propTypes = {
    size: PropTypes.number,
};

export default Margin;