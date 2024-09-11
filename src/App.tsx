import './App.css';
import Ball from './components/Ball/Ball.tsx';

const numbers = [5, 11, 16, 23, 32];

const App = () => {
    return (
        <div className='container'>
        <div className= 'balls'>
            {numbers.map((number, index) => (
                <Ball key={index} number={number} />
            ))}
        </div>
        </div>
    );
};

export default App;
