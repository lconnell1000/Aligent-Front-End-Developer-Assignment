import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { Slider } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { laptop, mobile } from "../responsive";
import classes from '../Backdrop.css';

const Container = styled.div`
  padding: 20px 10px;
  background-color: grey;
  height: 15vh;
  ${mobile({ height: "35vh" })}
  ${laptop({ height: "30vh" })}
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${laptop({ display: "block" })}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: none;
`;
const Input = styled.input`
  border: none;
  padding: 10px;
  background-color: grey;
  color: white;
  width: 300px;
  font-size: 20px;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 14px;
  color: white;
  padding: 0px 15px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;
const Value = styled.div`
  padding: 0px 15px;
`;

const RadioWrapper = styled.div`
    display: flex:
    flex-direction: row;
    color: white;
    padding: 0px 15px;
`;

const Navbar = (props) => {
  const handleChange = (event, newValue) => {
    props.setYearValue(newValue);
  };

  const handleRadioChange = (event, selectedValue) => {
    props.setRadioValue(selectedValue);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <SearchIcon
              onClick={() => props.onSearch()}
              style={{ color: "white" }}
              className="search"
            />
            <Backdrop
              className={classes.backdrop}
              open={props.searching}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Input
              value={props.searchValue}
              onChange={(event) => props.setSearchValue(event.target.value)}
              placeholder="Search"
            />
          </SearchContainer>
        </Left>
        <Center>
          <Title>YEAR</Title>
          <SliderWrapper>
            <Value>{props.yearValue[0]}</Value>
            <Slider
              getAriaLabel={() => "Year range"}
              value={props.yearValue}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={1950}
              max={2021}
              sx={{
                width: 250,
                color: "#bdbdbd",
              }}
            />
            <Value>{props.yearValue[1]}</Value>
          </SliderWrapper>
        </Center>
        <Right>
          <Title>TYPE</Title>
          <RadioWrapper>
            <FormControl>
              <RadioGroup
                value={props.radioValue}
                onChange={handleRadioChange}
                row
              >
                <FormControlLabel value="Any" control={<Radio />} label="Any" />
                <FormControlLabel
                  value="movie"
                  control={<Radio />}
                  label="Movies"
                />
                <FormControlLabel
                  value="series"
                  control={<Radio />}
                  label="Series"
                />
                <FormControlLabel
                  value="episode"
                  control={<Radio />}
                  label="Episodes"
                />
              </RadioGroup>
            </FormControl>
          </RadioWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
