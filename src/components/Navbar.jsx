import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const Container = styled.div`
    height: 100px;
    background-color: grey;
`

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border: none;
`
const Input = styled.input`
    border: none;
    padding: 10px;
    background-color: grey;
    color: white;
    width: 300px;
    font-size: 20px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                        <SearchIcon style={{color:"white"}}/>
                        <Input placeholder="Search" />
                </SearchContainer>
            </Left>
            <Right>
                hello
            </Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar