import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
width: 100%;
height:100vh;
display:flex;
gap:0.5rem;
flex-direction:column;
align-items:center;

`
const Container = styled.div`
width:70%;
display:flex;
justify-content:space-between;
height:100vh;
font-family:sans-serif;

`
const Title = styled.h1`
font-size:3.5rem;
`
const Subtitle = styled.h4`
color:#E0144C;
`
const Desc = styled.p`
font-size:14px;
color:gray;
`
const Button = styled.button`
width:fit-content;
padding: 7px 5px;
background-color:#E0144C;
border-radius:5px;
border:none;
color:white;
cursor:pointer;

`
const Left = styled.div`
flex:2;
display:flex;
flex-direction:column;
justify-content:center;
text-align:left;
gap:10px;

align-items:left;
`
const Right = styled.div`
flex:3;
position:relative;
`
const Img = styled.img`
position:absolute;
height:500px;
width:600px;
object-fit:contain;
margin:auto;
left:0;
right:0;
bottom:0;
top:0;
animation: animate 2s infinite ease alternate;
@keyframes animate{
    100%{transform: translateY(20px)}
    
}

`

function Hero() {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve</Title>
                    <Subtitle>What We Do</Subtitle>
                    <Desc>we enjoy creating delightful, human-centerd digital expriences</Desc>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    <Img src='./img/moon.png' />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero