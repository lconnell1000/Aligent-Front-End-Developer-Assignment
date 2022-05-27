import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%
height: 20vh;
display: flex;
flex-direction: column;

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
    font-size: 12px;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Movies = (props) => {
  return (
    <Container>
        {props.movies.map((movie, index) =>
        <div>
            <ImgContainer>
            <Image src={movie.Poster}/>
            </ImgContainer>
            <InfoContainer>
            <Title>{movie.Title}</Title>
            </InfoContainer>
        </div>)}
    </Container>
  )
}

export default Movies