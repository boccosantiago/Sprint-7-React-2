import React, { useState } from "react";
import "./Budget.css";

export default function Budget(props) {
  const [users, setUsers] = useState([]);

  console.log(users);

  const current = new Date();

  const date = current.toString().slice(0,24)

 /*  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`; */

  function handleUsers() {
    const newUser = {
      budget: props.budget,
      client: props.client,
      date: date,
      currentDate: current,
      total: props.total,
      webPage: props.webPage,
      seo: props.seo,
      ads: props.ads,
      numPage: props.numPage,
      numLang: props.numLang,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  function alphabetical() {
    let result = users.sort((a, b) => {
      return a.budget > b.budget ? 1 : -1;
    });
    setUsers([...result]);
  }

  function orderByDate() {
    let result = users.sort((a, b) => {
      return b.currentDate - a.currentDate 
    });
    setUsers([...result]);
  }

  function defaultOrder() {
    let result = users.sort((a, b) => {
      return a.currentDate - b.currentDate
    });
    setUsers([...result]);
  }

  const budgetForm = users.map((user, index) => {
    return (
      <div className="budget" key={index}>
        <p>{user.date}</p>
        <p>Nombre del presupuesto: <br /><p className="text">{user.budget}</p> </p>
        <p> Nombre de cliente: <br /><p className="text"> {user.client}</p> </p>
        <p>Precio: {user.total} € </p>
      </div>
    );
  });

  return (
    <div className="main-container">
      <div className="buttons-order">
        <button onClick={alphabetical}>Ordenar Alfabéticamente</button>
        <button onClick={orderByDate}>Más recientes</button>
        <button onClick={defaultOrder}>Más antiguos</button>
      </div>
      <button className="agregar" onClick={() => handleUsers()}>
        Agregar
      </button>
      <div className="budget-container">{budgetForm}</div>
    </div>
  );
}
