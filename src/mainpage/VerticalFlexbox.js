import React from 'react';

const VerticalFlexbox = ({ children, style = {}, width = '100%' }) => {

    const defaultStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: width,
    };

    return (
        <div style={{ ...defaultStyles, ...style }}>
            {children}
        </div>
    );
};

export default VerticalFlexbox;