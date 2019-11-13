import React from 'react';

const MemoComponent = ({ name }) => {
    console.log('MemoComponent rendered.');

    return (
        <div>
            <span>Hi {name}, I am a Memo Component.</span>
        </div>
    );
};

export default React.memo(MemoComponent);
