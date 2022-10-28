import styled from "styled-components";

import { NavLink } from "react-router-dom";

//Bootstrap
import {
    Button
} from 'react-bootstrap';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4%;
  width: 100%;
  background: rgb(16,15,70);
  background: -moz-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
  background: linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#100f46",endColorstr="#032a6b",GradientType=1);
  @media (max-width: 991px) {
    
  }
`