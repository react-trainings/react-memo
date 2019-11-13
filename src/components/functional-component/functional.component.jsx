import React from 'react';

const FunctionalComponent = ({ name }) => {
    console.log('FunctionalComponent rendered.');

    return (
        <div>
            <span>Hi {name}, I am a Functional Component.</span>
        </div>
    );
};

export default FunctionalComponent;
