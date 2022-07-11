import React, { useState } from "react";
import "./Budget.css";

export default function Budget(props) {
  const [users, setUsers] = useState([]);

  function handleUser() {
    
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

    setUsers([...users, newUser]);
  }

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  /*   console.log(users) */
  return (
    <div>
      <div>
        <button onClick={handleUser}>Agregar</button>
      </div>
      <div>
        {users.map((user, index) => (
          <ul className="budget" key={index}>
            <p>Fecha: {date}</p>
            <p>Nro. de presupuesto: {user.budget} </p>
            <p>Nombre de cliente: {user.client}</p>
            <p>Precio: {user.total} € </p>
          </ul>
        ))}
      </div>
    </div>
  );
}
