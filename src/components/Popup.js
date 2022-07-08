import React from "react";
import "./Popup.css";

function Popup(props) {
  if (props.triggerPage) {
    return (
      <div onClick={() => props.setTriggerPage(false)} className="popup">
        <div onClick={(e) => e.stopPropagation()} className="popup-inner">
          <p>
            En este componente deberá indicar el número de páginas que desea
            para su sitio web.
          </p>
        </div>
      </div>
    );
  }
  if (props.triggerLang) {
    return (
      <div onClick={() => props.setTriggerLang(false)} className="popup">
        <div onClick={(e) => e.stopPropagation()} className="popup-inner">
          <p>
            En este componente deberá indicar el número de idiomas que desea
            para su sitio web.
          </p>
        </div>
      </div>
    );
  }
}


export default Popup;
