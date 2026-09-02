import React from 'react';

const Watch = ({watch}) => {
    return (
        <div style={{border:'2px solid red', margin:'20px', padding:'20px'}}>
            <h3>watch</h3>
            <h2>Watch: {watch.name}</h2>
            <p>Price: {watch.price}</p>
        </div>
    );
};

export default Watch;