import styled from "styled-components";

export const Panel = styled.div`
  border: solid 3px black;
  width: 300px;
  height: 90px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
  input {
    width: 20px;
  }

`;
