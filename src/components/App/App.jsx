import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // Setup local state
  const [airlineInput, setAirlineInput] = useState('')
  const [planeCount,  setPlaneCount] = useState(0)
  // Setup store
  const reduxStore = useSelector(store=>store)
  // Setup dispatch
  const dispatch = useDispatch()

  // function to handle Add Airline button
  const handleAddAirline = () => {
    // console.log('clicked')
    dispatch({type: 'ADD_AIRLINE', payload: {
      name: airlineInput,
      count: planeCount
    }})
    setAirlineInput('')
    setPlaneCount(0)
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
      <input 
        placeholder='Plane Count'
        type='number'
        value={planeCount}
        onChange={(event)=>{setPlaneCount(event.target.value)}} 
      />
      <button onClick={handleAddAirline}>Add Airline</button>
      
      <table>
        <tbody>
          <tr>
            <th>Airline</th>
            <th>Plane Count</th>
          </tr>
          {reduxStore.map((airline, i)=>{
            return (
            <tr key={i}>
              <td>{airline.name}</td>
              <td>{airline.count}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}

export default App;
