import styled from 'styled-components'

export const Panel = styled.div`
border: solid 3px black;
width: 250px;
height: 100px;
margin-top: 15px;
border-radius: 10px;
padding-top:15px;
padding-left:10px;
display: ${props => props.show ? "block" : "none" }
`
