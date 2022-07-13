import React, { useState, useEffect } from "react";
import "./Budget.css";

export default function Budget(props) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([])
  const currentDate = new Date();

  const date = currentDate.toString().slice(0, 24);

  /*  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`; */

  function handleUsers() {
    const newUser = {
      budget: props.budget,
      client: props.client,
      date: date,
      currentDate: currentDate,
      total: props.total,
      webPage: props.webPage,
      seo: props.seo,
      ads: props.ads,
      numPage: props.numPage,
      numLang: props.numLang,
    };

    setUsers((prevUsers) => [newUser,...prevUsers]);
    setFilteredUsers([newUser,...users]);

    try {
      const getData = localStorage.getItem("savedBudget");
      return getData ? JSON.parse(getData) : newUser;
    } catch (error) {
      return users;
    }
  }

  useEffect(() => {
    localStorage.setItem("savedBudget", JSON.stringify(users));
  }, [users]);


  function alphabetical() {
    let result = filteredUsers.sort((a, b) => {
      return a.budget > b.budget ? 1 : -1;
    });
    setUsers([...result]);
  }

  function orderByDate() {
    let result = filteredUsers.sort((a, b) => {
      return b.currentDate - a.currentDate;
    });
    setUsers([...result]);
  }

  function defaultOrder() {
    let result = filteredUsers.sort((a, b) => {
      return a.currentDate - b.currentDate;
    });
    setUsers([...result]);
  }

  const [search, setSearch] = useState("");
 
  
  function handleSearch(event) {
    setSearch(event.target.value);
    //console.log(event.target.value);
    filter(event.target.value);
  }

  function filter(searchTerm) {

    if(searchTerm === undefined){
      setFilteredUsers(users)  
    } else {
      var searchResult = [...users].filter((element) => {
      return element.budget.includes(searchTerm) 
    }) 
    setFilteredUsers(searchResult)
    }
}

  console.log(filteredUsers)


  const budgetForm = filteredUsers.map((user, index) => {
    return (
      <div className="budget" key={index}>
        <p>{user.date}</p>
        <p>
          Nombre del presupuesto: <br />
          <span className="text">{user.budget}</span>{" "}
        </p>
        <p>
          {" "}
          Nombre de cliente: <br />
          <span className="text"> {user.client}</span>{" "}
        </p>
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
        <input className="search-bar" type="text" placeholder="Buscar..." value={search} onChange={handleSearch} />
      </div>
      <button className="agregar" onClick={() => handleUsers()}>
        Agregar
      </button>
      <div className="budget-container">{budgetForm}</div>
    </div>
  );
}
