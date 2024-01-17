import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // Setup local state
  const [airlineInput, setAirlineInput] = useState('')
  // Setup store
  const reduxStore = useSelector(store=>store)
  // Setup dispatch
  const dispatch = useDispatch()

  // function to handle Add Airline button
  const handleAddAirline = () => {
    // console.log('clicked')
    dispatch({type: 'ADD_AIRLINE', payload: airlineInput})
    setAirlineInput('')
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <input 
        placeholder='Airline Name'
        type='text'
        value={airlineInput}
        onChange={(event)=>{setAirlineInput(event.target.value)}} 
      />
      <button onClick={handleAddAirline}>Add Airline</button>
      
      <table>
        <tbody>
          {reduxStore.map((airline, i)=>{
            return (
            <tr key={i}>
              <td>{airline}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}

export default App;
