import React from "react";
import PagesLanguages from "./PagesLanguages";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Budget from "./Budget";

export function Main() {
  const [data, setData] = useState(() => {
    const initialData = {
      webPage: false,
      seo: false,
      ads: false,
      numPage: 0,
      numLang: 0,
      budget: "",
      client: "",
    };
    try {
      const getData = localStorage.getItem("data");
      return getData ? JSON.parse(getData) : initialData;
    } catch (error) {
      return initialData;
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function handleChange(event) {
    const { name, type, checked, value, className } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]:
          type === "checkbox"
            ? checked
            : className !== "presup" && (value < 0 || isNaN(value))
            ? 0
            : value,
      };
    });
  }

  function totalSum() {
    let total =
      (data.webPage ? 500 + data.numLang * data.numPage * 30 : 0) +
      (data.seo ? 300 : 0) +
      (data.ads ? 200 : 0);
    return total;
  }

  return (
    <div className="form-container">
      <div className="form">
        <h3>¿Que quieres hacer?</h3>

        <input
          type="checkbox"
          name="webPage"
          id="webPage"
          onChange={handleChange}
          checked={data.webPage}
        />
        <label htmlFor="webPage">Una página web (500€)</label>

        <PagesLanguages
          numPage={data.numPage}
          numLang={data.numLang}
          onChange={handleChange}
          data={data.webPage}
          setData={setData}
        />

        <br />

        <input
          type="checkbox"
          name="seo"
          id="seo"
          onChange={handleChange}
          checked={data.seo}
        />
        <label htmlFor="seo">Una consultoria SEO (300€)</label>

        <br />

        <input
          type="checkbox"
          name="ads"
          id="ads"
          onChange={handleChange}
          checked={data.ads}
        />
        <label htmlFor="ads">Una campaña de Google Ads (200€)</label>

        <h3>Precio: {totalSum()} € </h3>

        <label htmlFor="budget">Nombre del presupuesto</label>
        <br />
        <input
          type="text"
          className="presup"
          name="budget"
          id="budget"
          onChange={handleChange}
          value={data.budget}
        />
        <br />
        <label htmlFor="client">Nombre del cliente</label>
        <br />
        <input
          type="text"
          className="presup"
          name="client"
          id="client"
          onChange={handleChange}
          value={data.client}
        />
        <br />
        <br />

        <div>
          <Link className="link" to="/">
            Regresar al Home
          </Link>
        </div>
      </div>

        <Budget
          total={totalSum()}
          budget={data.budget}
          client={data.client}
          webPage={data.webPage}
          seo={data.seo}
          ads={data.ads}
          numPage={data.numPage}
          numLang={data.numLang}
        />
    </div>
  );
}
