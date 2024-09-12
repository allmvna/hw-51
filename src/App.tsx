import './App.css';
import Ball from './components/Ball/Ball.tsx';
import React, { useState } from 'react';

const generateNewNumbers = () => {
    const numbers = new Set<number>();
    while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * 32) + 5);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}


const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const getRandomNumbers = () => {
        setNumbers(generateNewNumbers());
    }

    return (
        <div className='container'>
        <div className= 'balls'>
            {numbers.map((number, index) => (
                <Ball key={index} number={number} />
            ))}
        </div>
            <button className= 'button' onClick={getRandomNumbers} type='button'>New numbers</button>
        </div>
    );
};

export default App;
