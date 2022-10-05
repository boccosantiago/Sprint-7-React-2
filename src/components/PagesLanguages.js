import { Panel } from "./styled";
import Popup from "./Popup";
import { useState } from "react";
import "./Popup.css";



export default function PagesLanguages(props) {

  const [popupPage, setPopupPage] = useState(false)
  const [popupLang, setPopupLang] = useState(false)


  function counter(event, i) {
    const { name } = event.target;
    const numPage = parseInt(props.numPage);
    const numLang = parseInt(props.numLang);

    props.setData((prevData) => {
      return {
        ...prevData,
        [name]: name === "numPage" ? numPage + i : numLang + i,
      };
    });
  }

  

  return (
    <div>
    <Panel className="panel" show={props.data}>
      <label className="pages">Número de páginas</label>
      <button 
      className="btnPlusMinus"
      name="numPage" 
      onClick={(e) => counter(e, 1)}>
        +
      </button>

      <input
        name="numPage"
        id="numPage"
        type="text"
        placeholder="0"
        value={props.numPage}
        onChange={props.onChange}
      />
      <button
        className="btnPlusMinus"
        name="numPage"
        onClick={(e) => {
          if (props.numPage > 0) return counter(e, -1);
        }}
      >
       -
      </button>
      <button 
      onClick={()=> setPopupPage(true)}
      className="info"
      >
        i
      </button>
      <br />
      <label className="pages">Número de idiomas</label>
      <button 
      className="btnPlusMinus"
      name="numLang" 
      onClick={(e) => counter(e, 1)}>
        
        +
      </button>
      <input
        name="numLang"
        id="numLang"
        type="text"
        placeholder="0"
        value={props.numLang}
        onChange={props.onChange}
      />
      <button
        className="btnPlusMinus"
        name="numLang"
        onClick={(e) => {
          if (props.numLang > 0) return counter(e, -1);
        }}
      >
       -
      </button>

      <button 
      onClick={()=> setPopupLang(true)}
      className="info"
      >
        i
      </button>

  
    </Panel>


    <Popup 
    triggerPage={popupPage}
    setTriggerPage={setPopupPage}
    triggerLang={popupLang}
    setTriggerLang={setPopupLang}
    />

    </div>
  );
}
