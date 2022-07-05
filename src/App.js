import './styles.css';
import { useState } from 'react';
import {PagesLanguages} from './components/PagesLanguages';



function App() {


const [data, setData] = useState({
  webPage: false,
  seo: false,
  ads: false,
  numPage: 1,
  numLang: 1,

})

function handleChange(event){
  const {name, type, checked, value} = event.target 
  console.log(value)
  setData(prevData => {
    return {
      ...prevData,
      [name]: type === "checkbox" ? checked : value,

    }
  })
}

function totalSum(){
  let total = (data.webPage ? 500 + (data.numPage * data.numLang * 30) : 0) + 
  (data.seo ? 300 : 0) +
  (data.ads ? 200 : 0)
  console.log(data.numPage)
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
      <label htmlFor="webPage">Una página web (500€)</label>

      <PagesLanguages 
      onChange = {handleChange}
      numPage={data.numPage} 
      numLang={data.numLang} 
      data={data.webPage}
      />

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
