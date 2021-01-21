import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}
  *{
    margin-block-start:unset;
    margin-block-end: unset;
    padding-inline-start: unset;
    box-sizing:border-box;font-family:arial;
    margin:unset;background-color: unset;
    border: unset;
    padding: unset;
  }
  button
  {
    cursor:pointer;
  }
`;
