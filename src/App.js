import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import CardItem from './CardItem';
import TaskItem from './TaskItem'

function App() {

  const avatarUrl = "https://avatars3.githubusercontent.com/u/3266316?s=40&v=4"
  return (
    <div>
      <Nav>
        <Container>
          <LogoSelection>
            <i className="nav__logo__icon ion-radio-waves" />
            <LogoText href="/#/songs" title="">SLOWP</LogoText>
          </LogoSelection>

          <SearchSelection>
            <SearchWrapper>
              <SearchIcon />
              <Input
                className="nav-search__input"
                placeholder="SEARCH"
                type="text"
              />              
            </SearchWrapper>
          </SearchSelection>
          
          <UserSelection>
            <UserWrapper>
              <Img src={avatarUrl} />
            </UserWrapper>              
          </UserSelection>
        </Container>        
      </Nav>
      <ItemsContainer>
        {/* <CardItem /> */}
        <TaskItem />
      </ItemsContainer>
    </div>
  );
}

export default App;

const ItemsContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
`

const Img = styled.img`
width: 30px;
height: 30px;
background: no-repeat center center;
background-size: cover;
border-radius: 50%;
margin-right: 20px;
`

const UserSelection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 100%
margin-left: auto;
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SearchIcon = styled.i`
position: absolute;
top: 6px;
left: 10px;
color: #808080;
pointer-events: none;
font-style: inherit;
  &::before {
    font-family: 'Material Icons';
    content: "search";    
  }
`

const SearchWrapper = styled.div`
position: relative;
background-color: #2b2b2b;
border-radius: 3px;
`

const Input = styled.input`
width: 290px;
padding: 6px 10px 6px 30px;
color: #e3e3e3;
font-size: 12px;
font-weight: 300;
background-color: transparent;
border: none;
outline: 0;
`

const Nav = styled.div`
  height: 50px;
  background-color: #3a3f41;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const LogoSelection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%
`

const LogoText = styled.a`
  color: #fff
  margin-left: 30px;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
  }  
`

const SearchSelection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 100%
`

// <PlayerContainer />
// <HistoryContainer />

// /Users/hayashida/src/github.com/andrewngu/sound-redux/client/src/components/Root.jsx