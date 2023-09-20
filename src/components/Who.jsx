import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
width: 100%;
height:100vh;
display:flex;
gap:0.5rem;
flex-direction:column;
align-items:center;
justify-content:center;

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
flex:1;

`
const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
text-align:left;
gap:10px;

align-items:left;
`

function Who() {
    return (
        <Section>

            <Container>
                <Left>

                </Left>
                <Right>
                    <Title>Think. Make. Solve</Title>
                    <Subtitle>What We Do</Subtitle>
                    <Desc>we enjoy creating delightful, human-centerd digital expriences</Desc>
                    <Button>Learn more</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who