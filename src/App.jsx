import styled from "styled-components"
import React from "react"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Work from "./components/Work"

const Container = styled.div`
height:100vh;
background-color:rebeccapurple;
scroll-snap-type: y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width:0;
color:white;
background-image:url('./img/peakpx.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
&::-webkit-scrollbar{
  display:none;
}

`



function App() {
  return (
    <Container >
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  )
}

export default App


