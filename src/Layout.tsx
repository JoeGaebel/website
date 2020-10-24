import styled from "styled-components";
import {BodyFont, HeaderFont} from "./Fonts";

export const SectionHeader = styled(HeaderFont)`
  /* Extra small devices (phones, 600px and down) */
 @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 1.75rem;
  }
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
  
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 3rem;
  }
  
  /* Extra Extra large devices (large laptops and desktops, 1400px and up) */
  @media only screen and (min-width: 1400px) {
    font-size: 3rem;
  }
`

export const SectionText = styled(BodyFont)`
 /* Extra small devices (phones, 600px and down) */
 @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
  }
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 1.25rem;
  }
  
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
  
  /* Extra Extra large devices (large laptops and desktops, 1400px and up) */
  @media only screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`

export const Section = styled.div`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin: 1.5rem 1.5rem;
  }
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    margin: 2rem 2rem;
  }
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {...}
  
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    
  }
  
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin: 5rem 15rem;
  }

  /* Extra Extra large devices (large laptops and desktops, 1400px and up) */
  @media only screen and (min-width: 1400px) {
    margin: 5rem 20rem;
  }
`
