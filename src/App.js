import './styles.css';
import { useState } from 'react';


function App() {


const [data, setData] = useState({
  webPage: false,
  seo: false,
  ads: false
})

function handleChange(event){
  const {name, checked} = event.target 

  setData(prevData => {
    return {
      ...prevData,
      [name]: checked
    }
  })
}

function totalSum(){
  let total = (data.webPage ? 500 : 0) +
  (data.seo ? 300 : 0) +
  (data.ads ? 200 : 0)

  return total
}

  return (
    <div>
      <h3>¿Que quieres hacer?</h3>
      <input 
      type="checkbox" 
      name= "webPage"
      id="webPage"
      onChange={handleChange}
      checked={data.webPage}
      />
      <label htmlFor="webPage">Una pagina web (500€)</label>
      <br/>
      <input 
      type="checkbox" 
      name= "seo"
      id="seo"
      onChange={handleChange}
      checked={data.seo}
      />
      <label htmlFor="seo">Una consultoria SEO (300€)</label>
      <br/>
      <input 
      type="checkbox" 
      name= "ads"
      id="ads"
      onChange={handleChange}
      checked={data.ads}
      />
      <label htmlFor="ads">Una campaña de Google Ads (200€)</label>
      <h3>Precio: {totalSum()}  € </h3>
    </div>
  );
}

export default App;
