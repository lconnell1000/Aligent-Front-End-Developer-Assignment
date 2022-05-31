import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { Slider } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from '@mui/material/FormControl';
import { laptop } from "../responsive";

const Container = styled.div`
  padding: 20px 10px;
  background-color: grey;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${laptop({ display: "block"})}
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
  const [value, setValue] = useState([1950, 2021]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRadioChange = (event, selectedValue) => {
  props.setRadioValue(selectedValue);
      console.log("radio value: ", selectedValue);
  }
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <SearchIcon style={{ color: "white" }} />
            <Input value={props.searchValue}
             onChange={(event) => props.setSearchValue(event.target.value)}
             placeholder="Search" />
          </SearchContainer>
        </Left>
        <Center>
          <Title>Year</Title>
          <SliderWrapper>
            <Value>{value[0]}</Value>
            <Slider
              getAriaLabel={() => "Year range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={1950}
              max={2021}
              sx={{
                width: 250,
                color: "#bdbdbd",
              }}
            />
            <Value>{value[1]}</Value>
          </SliderWrapper>
        </Center>
        <Right>
          <Title>Type</Title>
          <RadioWrapper>
              <FormControl>
            <RadioGroup selectedValue={props.radioValue} onChange={handleRadioChange} row>
              <FormControlLabel 
              value="Any" 
              control={<Radio />} 
              label="Any" />
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
