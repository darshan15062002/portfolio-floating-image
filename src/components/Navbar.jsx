import React from 'react'
import styled from 'styled-components'
const Section = styled.div`
display:flex;
height:4rem;
width:100%;
justify-content:center;
align-items:center;
`
const Container = styled.div`
display:flex;
justify-content:space-between;
width:70%;
`
const Link = styled.div`
display:flex;
align-items:center;
justify-content:left;
gap:3rem;

margin-top:2rem;`
const List = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:2rem`
const Listitem = styled.div`
cursor:pointer;`
const Icon = styled.div`
display:flex;
gap:10px;
`
const Img = styled.img`
height: 25px; 
background:white;
border-radius:5px;
`

function Navbar() {
    return (
        <Section>
            <Container>
                <Link>
                    <h1>Portfolio.io</h1>

                    <List>
                        <Listitem href="#who">Home</Listitem>
                        <Listitem href="#who">Studio</Listitem>
                        <Listitem href="#work">Works</Listitem>
                        <Listitem href="#contact">Contact Us</Listitem>
                    </List>
                    <Icon>
                        <img src='./img/linkedin-logo-png-2026.png' height={'25px'} />
                        <Img src='./img/github-logo-icon-16156.png' />
                    </Icon>
                </Link>
            </Container>
        </Section>
    )
}

export default Navbar