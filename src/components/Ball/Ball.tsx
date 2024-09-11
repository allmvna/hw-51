import './Ball.css';
import React from 'react';

interface Props {
    number: number;
}

const Ball: React.FC<Props> = ({ number }) => {
    return (
        <div className='ball'>
            {number}
        </div>
    );
};

export default Ball;
