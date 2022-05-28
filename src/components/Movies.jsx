import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 35%;
height: 100vh;
display: flex;
flex-direction: column;
overflow: scroll;
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-style: solid;
border-color: grey;
border-width: 1px;
border-left-style: none;
&:hover{
    background-color: #CFCECE;
}
`
const ImgContainer = styled.div`
    height: 150px;
    width:
    flex: 1;
    padding: 20px 10px;
`
const Image = styled.img`
    height: 100%;
`
const Title = styled.h1`
    font-size: 16px;
    font-weight: 400;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Year = styled.h3`
    font-size: 12px;
    font-weight: 200;
`
const Movies = (props) => {
  return (
    <Container className="text-right">
        {props.movies.map((movie, index) =>
        <div>
            <Wrapper>
            <ImgContainer>
            <Image src={movie.Poster}/>
            </ImgContainer>
            <InfoContainer>
            <Title>{movie.Title}</Title>
            <Year>{movie.Year}</Year>
            </InfoContainer>
            </Wrapper>
        </div>)}
    </Container>
  )
}

export default Movies