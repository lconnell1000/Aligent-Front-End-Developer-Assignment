import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 25vh;
  padding: 50px 30px;
  overflow: scroll;
  border-bottom: 1px solid grey;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;

  cursor: pointer;
  &:hover {
    background-color: #cfcece;
  }
  padding: 15px 15px;
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
  padding: 30px 10px;
  border-right: 1px solid grey;
`;
const Year = styled.h3`
  font-size: 12px;
  font-weight: 200;
`;
const ResultsContainer = styled.div`
  display: flex;
  height: 135 px;
  font-weight: 400;
  font-size: 24px;
  color: grey;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
`;

const Watchlist = (props) => {
  return (
    <Container>
      <ResultsContainer>Watchlist:</ResultsContainer>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <Wrapper>
            <ClearSharpIcon
              onClick={() => props.removeWatchlistMovie(movie)}
              style={{ color: "grey" }}
            />
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
