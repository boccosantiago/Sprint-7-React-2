import {Panel} from './styled'



export function PagesLanguages(props){

    return(
    
      <Panel show={props.data}>
      <label className='pages'>Número de paginas</label>
      <input
      name="numPage"
      id='numPage'
      type="number" 
      min="1" max="20"
      placeholder= "1"
      value = {props.data.numPage}
      onChange={props.onChange}
      >
      </input> 
      <br/>
      <label className='pages'>Número de idiomas</label>
      <input
      name="numLang"
      id='numLang'
      type="number" 
      min="1" max="10"
      placeholder="1"
      value = {props.data.numLang}
      onChange={props.onChange}
      >
      </input> 
      </Panel> 
    )
     
  }

