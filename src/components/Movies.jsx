import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%
height: 20vh;
display: flex;
flex-direction: column;

`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const ImgContainer = styled.div`
    height: 50%;
    flex: 1;
    padding-top: 9%;
`
const Image = styled.img`
    height: 20%;
`
const Title = styled.h1`
    font-size: 16px;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Year = styled.h3`
    font-size: 12px;
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