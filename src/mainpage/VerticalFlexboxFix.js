import React from 'react';

const VerticalFlexboxFix = ({ children, style = {}, width = '55em' }) => {
    const isMobile = window.innerWidth <= 768;

    const defaultStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: isMobile? '90%' : width,
        gap: '0px',
    };

    return (
        <div className="vertical-flexbox-fix" style={{ ...defaultStyles, ...style }}>
            {children}
        </div>
    );
};

export default VerticalFlexboxFix;