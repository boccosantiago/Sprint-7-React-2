import React, { useState } from "react";
import "./Budget.css";

export default function Budget(props) {
  const [users, setUsers] = useState([]);

  console.log(users);

  const current = new Date();

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  function handleUsers() {
    const newUser = {
      client: props.client,
      date: date,
      currentDate: current,
      total: props.total,
      webPage: props.webPage,
      seo: props.seo,
      ads: props.ads,
      numPage: props.numPage,
      numLang: props.numLang,
      budget: props.budget,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  function alphabetical() {
    let result = users.sort((a, b) => {
      return a.client > b.client ? 1 : -1;
    });
    setUsers(() => [...result]);
  }

  function orderByDate() {
    let result = users.sort((a, b) => {
      return a.currentDate < b.currentDate ? 1 : -1;
    });
    setUsers(() => [...result]);
  }
  function defaultOrder() {
    let result = users.sort((a, b) => {
      return a.currentDate > b.currentDate ? 1 : -1;
    });
    setUsers(() => [...result]);
  }

  const budgetForm = users.map((user, index) => {
    return (
      <div className="budget" key={index}>
        <p>{user.date}</p>
        <p>
          Nombre del presupuesto: <br /> {user.budget}{" "}
        </p>
        <p>
          Nombre de cliente: <br /> {user.client}
        </p>
        <p>Precio: {user.total} € </p>
      </div>
    );
  });

  return (
    <div className="main-container">
      <div>
        <button onClick={() => alphabetical(users)}>
          Ordenar Alfabeticamente
        </button>
        <button onClick={() => orderByDate(users)}>Ordenar por fecha</button>
        <button onClick={() => defaultOrder(users)}>Reiniciar Orden</button>
      </div>
      <button className="agregar" onClick={() => handleUsers()}>
        Agregar
      </button>
      <div className="budget-container">{budgetForm}</div>
    </div>
  );
}
