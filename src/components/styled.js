import styled from "styled-components";

export const Panel = styled.div`
  border: solid 3px black;
  width: 290px;
  height: 90px;
  margin-top: 15px;
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 10px;
  display: ${(props) => (props.show ? "block" : "none")};

  input {
    width: 20px;
  }

  button {
    border: none;
    color: white;
    background-color: orange;
    border-radius: 3px;
    cursor: pointer;
    width: 20px;
    height: 22px;
  }
  button:hover {
    background-color: rgb(250, 109, 0);
  }
`;
