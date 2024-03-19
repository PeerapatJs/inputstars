import { useState } from 'react'
import './App.css'

function App() {
  let [NumOfStars, setNumStars] = useState(0);
  const [ShowStars, setShowplayStars] = useState('');

  const handChange = (event) => {
    setNumStars(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let stars = '';
    for (let i = 0; i <= NumOfStars; i++) {
      stars += '*'.repeat(i)+'\n';
    }
    NumOfStars=NumOfStars-1;
    for (let i = NumOfStars; i > 0; i--) {
      stars += '*'.repeat(i)+'\n';
    }
    setShowplayStars(stars);
  };

  return (
    <div className='font'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numStarsInput">Input : </label>
        <input
          type="number"
          id="numStarsInput"
          value={NumOfStars}
          onChange={handChange}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <pre>{ShowStars}</pre>
    </div>
  );
}


export default App
