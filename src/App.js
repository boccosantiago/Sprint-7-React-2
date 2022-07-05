import "./styles.css";
import { useState } from "react";
import { PagesLanguages } from "./components/PagesLanguages";

function App() {
  const [data, setData] = useState({
    webPage: false,
    seo: false,
    ads: false,
    numPage: 0,
    numLang: 0,
  });

  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]:
          type === "checkbox" ? checked : value < 0 || isNaN(value) ? 0 : value,
      };
    });
  }

  function totalSum() {
    let total =
      (data.webPage ? 500 + (data.numLang * data.numPage * 30) : 0) +
      (data.seo ? 300 : 0) +
      (data.ads ? 200 : 0);
    return total;
  }

  return (
    <div>
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
    </div>
  );
}

export default App;
