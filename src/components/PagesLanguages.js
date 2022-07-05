import {Panel} from './styled'

export function PagesLanguages(props){

  function counter(event, i) {
      const {name} = event.target
      const numPage = parseInt(props.numPage)
      const numLang = parseInt(props.numLang)

      
      props.setData(prevData => {
        return{
          ...prevData,
          [name]: name === "numPage" ? numPage + i : numLang + i
        }
    
      });
    }
    console.log(props.numPage)
    
    return(
    
      <Panel show={props.data}>
      <label className='pages'>Número de páginas</label>
      <button name='numPage' onClick={(e)=> counter(e, 1)}> + </button>
      
      <input
      name="numPage"
      id='numPage'
      type="text" 
      placeholder= "0"
      value = {props.numPage}
      onChange= {props.onChange}
      />
      <button name='numPage' onClick={(e)=> {if(props.numPage > 0) return counter(e,-1)}}> - </button>
      <br/>
      <label className='pages'>Número de idiomas</label>
      <button name='numLang' onClick={(e)=>counter(e,1)}> + </button>
      <input
      name="numLang"
      id='numLang'
      type="text" 
      placeholder="0"
      value = {props.numLang}
      onChange= {props.onChange}
      />
      <button name="numLang" onClick={(e)=>{if(props.numLang > 0) return counter(e,-1)}}> - </button>
      </Panel> 
    )
     
  }

