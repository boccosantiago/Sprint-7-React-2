import React, { useEffect, useState } from "react";
import "./Budget.css";

export default function Budget(props) {
  const [users, setUsers] = useState(() => {
    const initialData = [];
    try {
      const getData = localStorage.getItem("savedBudget");
      return getData ? JSON.parse(getData) : initialData;
    } catch (error) {
      return initialData;
    }
  });
  
  useEffect(() => {
    localStorage.setItem("savedBudget", JSON.stringify(users));
  }, [users]); ;

  const [filteredUsers, setFilteredUsers] = useState([...users])

  
  
  console.log('users',users)

  const currentDate = new Date();

  const fecha = Date.parse(currentDate)

  //const date = currentDate.toString().slice(0, 24);

  /*  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`; */

  function handleUsers() {
    const newUser = {
      budget: props.budget,
      client: props.client,
      date: fecha,
      total: props.total,
      webPage: props.webPage,
      seo: props.seo,
      ads: props.ads,
      numPage: props.numPage,
      numLang: props.numLang,
    };

    setUsers((prevUsers) => [newUser,...prevUsers]);
    setFilteredUsers([newUser, ...users]);

  }



  function alphabetical() {
    let result = [...filteredUsers].sort((a, b) => {
      return a.budget > b.budget ? 1 : -1;
    });
    console.log('alfa', result)
    setFilteredUsers(result);
  }

  function orderByDate() {
    let result = [...filteredUsers].sort((a, b) => {
      return b.date - a.date;
    });
    console.log('date', result)
    setFilteredUsers(result);
  }

  function defaultOrder() {
    let result = [...filteredUsers].sort((a, b) => {
      return a.date - b.date;
    });
    console.log('antiguos', result)
    setFilteredUsers(result);
  }

  const [search, setSearch] = useState("");
 
  
  function handleSearch(event) {
    setSearch(event.target.value);
    //console.log(event.target.value);
    filter(event.target.value);
  }

  function filter(searchTerm) {

    if(searchTerm.toLowerCase() === undefined){
      setFilteredUsers(users)  
    } else {
      var searchResult = [...users].filter((element) => {
      return element.budget.toLowerCase().includes(searchTerm.toLowerCase()) 
    }) 
    setFilteredUsers(searchResult)
    }
}

 const array = filteredUsers   

  const budgetForm = array.map((user, index) => {
    return (
      <div className="budget" key={index}>
        <p>{new Date(user.date).toLocaleDateString("es-ES",
                            {
                                year: '2-digit',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',

                            })}
        </p>

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
        <button className="agregar" onClick={() => handleUsers()}>
          Agregar
        </button>
        <button onClick={alphabetical}>Ordenar A-Z</button>
        <button onClick={orderByDate}>Más recientes</button>
        <button onClick={defaultOrder}>Más antiguos</button>
        <input className="search-bar" type="text" placeholder="Buscar..." value={search} onChange={handleSearch} />
      </div>
      <div className="budget-container">{budgetForm}</div>
    </div>
  );
}