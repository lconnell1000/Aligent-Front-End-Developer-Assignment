
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  height: 30vh;
  padding: 50px 30px;
  overflow: scroll;
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

  return (
    <Container>
     
        <ResultsContainer>Watchlist</ResultsContainer>
        {props.movies.map((movie, index) => (
          <div key={index}>
            <Wrapper>
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