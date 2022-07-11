import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";


export function Home(){
    let navigate = useNavigate();

    return(
       <div className="home">
        <h1>Bienvenido!</h1>
        <h3>Aquí podrá calcular el presupuesto para la creación de su página web.</h3>
        <button className="btnPresupuesto" onClick={()=> navigate('/main')}>Cacular presupuesto</button>
       </div>
    )
}