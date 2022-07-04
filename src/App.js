import './styles.css';
import { useState } from 'react';


function App() {

const [price, setPrice] = useState(0)
  
function calculateTotal (){
  
} 
/* function handleChangeWeb(event){
    const webPage = event.target.checked
    console.log(webPage)
    if (webPage === true){ setPrice(500)
    } else {setPrice(prevPrice => prevPrice)}
    }
function handleChangeSeo(event){
      const webPage = event.target.checked
      console.log(webPage)
      if (webPage === true){ setPrice(300)
      } else {setPrice(prevPrice => prevPrice)}

    }
function handleChangeAds(event){
    const webPage = event.target.checked
        console.log(webPage)
     if (webPage === true){ setPrice(200)
     } else {setPrice(prevPrice => prevPrice)}
    } */



  return (
    <div>
      <h3>¿Que quieres hacer?</h3>
      <input type="checkbox" value={500} onChange={handleChangeWeb}/><label>Una pagina web (500€)</label><br/>
      <input type="checkbox" value={300} onChange={handleChangeSeo}/><label>Una consultoria SEO (300€)</label><br/>
      <input type="checkbox" value={200}  onChange={handleChangeAds}/><label>Una campaña de Google Ads (200€)</label>
      <h3>Precio: {price} € </h3>
    </div>
  );
}


export default App;
