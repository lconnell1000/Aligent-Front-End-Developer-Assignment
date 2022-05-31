import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const ContainerLeft = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  border-right: 1px solid grey;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5px solid grey;
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

const ContainerTopRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid grey;
  padding: 20px 0px
`;
const ImageRight = styled.img`
  height: 100%;
`;

const ImgContainerRight = styled.div`
  height: 350px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  
`;
const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 300;
  padding: 2.5px 0px;
`;
const TitleRight = styled.div`
  font-weight: 700;
  font-size: 30px;
  padding: 2.5px 0px;
`;
const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  
`;
const MovieRating = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;
const MovieCategory = styled.div`
  padding: 5px;
`;

const MovieYear = styled.div`
  padding: 5px;
`;
const MovieRunTime = styled.div`
  padding: 5px;
`

const MovieActors = styled.div`
padding: 2.5px 0px;
font-weight: 300;
`
const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0px 20px;
`

const ContainerMiddleRight = styled.div`
  font-weight: 250;
  font-size: 20px;
  border-bottom: 1px solid grey;
  padding: 20px 10px;
`
const ContainerBottomRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 60px 40px;
  
`

const RatingsContainer = styled.div`
padding: 0px 20px;
border-right: 1px solid grey;
  
`
// const RatingsContainer:last-child = styled.div`

// `
const Movies = (props) => {
  const [movie, setMovie] = useState({});

  const handleClick = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=31e98962`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovie(responseJson);
  };

  return (
    <Container>
      <ContainerLeft>
        <ResultsContainer>{props.totalResults} Results</ResultsContainer>
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
      </ContainerLeft>
      {Object.keys(movie).length > 0 && (
        <ContainerRight>
          
          <ContainerTopRight>
            <ImgContainerRight>
              <ImageRight src={movie.Poster} />
              </ImgContainerRight>
              <MovieDetailsWrapper>
                <TitleRight>{movie.Title}</TitleRight>
                <MovieDetails>
                  <MovieRating>{movie.Rated}</MovieRating>
                  <MovieYear>{movie.Year} ·</MovieYear>
                  <MovieCategory>{movie.Genre} ·</MovieCategory>
                  <MovieRunTime>{movie.Runtime}</MovieRunTime>
                </MovieDetails>
                <MovieActors>
                {movie.Actors}
                </MovieActors>
              </MovieDetailsWrapper>
            
          </ContainerTopRight>
          <ContainerMiddleRight>
              {movie.Plot}
          </ContainerMiddleRight>
          <ContainerBottomRight>
              {movie.Ratings?.map(el => (
                <RatingsContainer>
                    <p>{el.Value}</p>
                    {el.Source}
                </RatingsContainer>
              ))}
              
          </ContainerBottomRight>
          </ContainerRight>
      )}
      
    </Container>
  );
};

export default Movies;
