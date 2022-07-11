import React, { useState } from "react";
import "./Budget.css";

export default function Budget(props) {
  const [users, setUsers] = useState([]);

  console.log(users)

  function handleUsers() {
 
    
    const newUser = {
      webPage: props.webPage,
      seo: props.seo,
      ads: props.ads,
      numPage: props.numPage,
      numLang: props.numLang,
      budget: props.budget,
      client: props.client,
      total: props.total,
    };

    setUsers(prevUsers => [...prevUsers, newUser]);
  }

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;


  const budgetForm = users.map((user, index) => {
    return (
    <div className="budget" key={index}>
    <p>Fecha: {date} </p>
    <p>Nombre del presupuesto: <br/> {user.budget} </p>
    <p>Nombre de cliente: <br/> {user.client}</p>
    <p>Precio: {user.total} € </p>
    </div>)})
  

  return (
    <div className="main-container">
      <button onClick={() => handleUsers()}>Agregar</button>
      <div className="budget-container">
      {budgetForm} 
      </div>
    </div>
  );
}