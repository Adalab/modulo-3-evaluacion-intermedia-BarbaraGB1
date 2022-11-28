import { useEffect, useState } from "react";
import fetchAda from "../services/api";
import "../styles/App.scss";

function App() {
  const [allAdalabers, setAllAdalabers] = useState([]);
  const [newAda, setNewAda] = useState({
    name: '',
    counselor: '',
    speciality:'',
    social_networks: [],
  });
  const [search, setSearch] = useState('');
  const [searchCoun, setSearchCoun] = useState('');

  const handleAdd = (ev) =>{
    setNewAda({...newAda,[ev.target.id]: ev.target.value})
  }
  const handleBtn = (ev) =>{
 
    ev.preventDefault()
    setAllAdalabers([...allAdalabers, newAda])
  }
  useEffect(()=>{
    fetchAda().then(dataApi=> {
      setAllAdalabers(dataApi.results);
    });
  }, []);
  console.log(allAdalabers);
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  }
  const handleSelect = (ev)=>{
    setSearchCoun(ev.target.value);
  }
  const htmlAda = allAdalabers
  .filter((oneAda) =>oneAda.name.toLowerCase().includes(search.toLowerCase()))
  .filter((oneAda) =>oneAda.counselor.toLowerCase().includes(searchCoun.toLowerCase()))
  .map((oneAda) => {
    return (
      <tr key={oneAda.id} className="eachproperty">
        <td className="eachtd">{oneAda.name}</td>
        <td className="eachtd">{oneAda.counselor}</td>
        <td className="eachtd">{oneAda.speciality}</td>
        <td className="eachtd">{oneAda.social_networks.map((red)=>{return(<a href="x">{red.name}</a>)})}</td>
      </tr>
    );
  });
 
 

  return (
    <div className="container">
      <h1 className="title">ADALABERS</h1>
      <form>
        <label htmlFor="searchName">Nombre:</label>
        <input onInput={handleSearch} type="search"
            name="searchId"
            id='searchId'
            placeholder="Filtrar nombre"
            value={search}></input>
        <label>Escoge una tutora</label>
        <select onChange={handleSelect}>
          <option value='yanelis'>Yanelis</option>
          <option value='dayana'>Dayana</option>
          <option value='ivan'>Iván</option>
        </select>
      </form>
      <table className="table">
        <thead className="header">
          <tr className="header_son">
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
            <th>Redes</th>
          </tr>
        </thead>
        <tbody className="body">{htmlAda}</tbody>
      </table>
      <h2 className="add">AÑADIR UNA ADALABER</h2>
      <form className="formAda">
        <label htmlFor="name" >Nombre: </label>
        <input onInput={handleAdd} value={newAda.name} type="text"
            name="name"
            id="name"
            placeholder="Nombre"></input>
        <label htmlFor="tutora">Tutora: </label>
        <input onInput={handleAdd} value={newAda.counselor} type="text"
            name="counselor"
            id="counselor"
            placeholder="Tutora"></input>
        <label htmlFor="especialidad">Especialidad: </label>
        <input onInput={handleAdd} value={newAda.speciality} type="text"
            name="speciality"
            id="speciality"
            placeholder="especialidad"></input>
        <button onClick={handleBtn} className="btn">Añadir Adalaber</button>
      </form>
    </div>
  );
}

export default App;
