import { useState } from 'react';
import data from '../data/adalabers.json'
import "../styles/App.scss";


function App() {

  const[allAdalabers , setAllAdalabers]= useState(data.results);


  const htmlAda = data.results.map((oneAda) => {
    return( 
    <tr key={oneAda.id} className= "eachproperty">
    <td className='eachtd'>{oneAda.name}</td>
    <td className='eachtd'>{oneAda.counselor}</td>
    <td className='eachtd'>{oneAda.speciality}</td>
    </tr>
    )  
});



  return (
    <div className="container">
      <h1 className='title'>ADALABERS</h1>
      <table className="table">
        <thead className='header'>
          <tr className='header_son' >
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody className='body'>
          {htmlAda}
        </tbody>
      </table>
    </div>
  );
}

export default App;
