import React, { useState } from "react";
import styled from "styled-components";
import { mobile, laptop } from "../responsive";

const Container = styled.div`
  display: flex;
  height: 20vh;
  padding: 50px 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-right: 0.5px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #cfcece;
  }
`;
const ImgContainer = styled.div`
  height: 135px;
  padding: 20px 10px;
`;
const Image = styled.img`
  height: 100%;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Year = styled.h3`
  font-size: 12px;
  font-weight: 200;
`;
const ResultsContainer = styled.div`
  display: flex;
  height: 135 px;
  font-weight: 400;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 10px;
`;


const Watchlist = (props) => {
    const [movie, setMovie] = useState({});

    const handleClick = async (id) => {
      const url = `http://www.omdbapi.com/?i=${id}&apikey=31e98962`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);
      setMovie(responseJson);
    };
console.log("props movies", props.movies)
  return (
    <Container>
     
        <ResultsContainer>Watchlist</ResultsContainer>
        {props.movies.map((movie, index) => (
          <div key={index}>
            <Wrapper onClick={() => handleClick(movie.imdbID)}>
              <ImgContainer>
                <Image src={movie.Poster} />
              </ImgContainer>
              <InfoContainer>
                <Title>{movie.Title}</Title>
                <Year>{movie.Year}</Year>
              </InfoContainer>
            </Wrapper>
          </div>
        ))}
     
    </Container>
  );
};

export default Watchlist;