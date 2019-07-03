import React from 'react';
import styled from 'styled-components'
import './App.css';
// import CardItem from './CardItem';
import TaskItems from './TaskItems'
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {}
  a { text-decoration: none; }
`

function App() {

  const avatarUrl = "https://avatars3.githubusercontent.com/u/3266316?s=40&v=4"
  return (
    <div>
      <GlobalStyle></GlobalStyle>

      <Nav>
        <Container>

          <LogoSelection>
            <LogoIcon />
            <LogoText href="/#/styles" title="">StylePlayGround</LogoText>
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

      <Wrapper>
        <ItemsWrapper>
          <ItemsContainer>
            {/* <CardItem /> */}
            <TaskItems />
            <TaskItems />
            <TaskItems />
          </ItemsContainer>
        </ItemsWrapper>
        <CommentsWrapper>
        <CommentsHeaer>
          <div class="sidebar__header__left">Comments</div>
        </CommentsHeaer>
        <CommentsBody>
          <CommentItem>
            <CommentImage />
            <CommentMain>Hey , Nice Track you got There , also we are a new label doing release on all major platforms follow us back for more new releases</CommentMain>
            <CommentTime>00:00</CommentTime>
          </CommentItem>
          <CommentItem>eee</CommentItem>
          <CommentItem>uuu</CommentItem>
          <CommentItem>uuu</CommentItem>
          <CommentItem>uuu</CommentItem>
          <CommentItem>uuu</CommentItem>
        </CommentsBody>        
        </CommentsWrapper>
      </Wrapper>
    </div>
  );
}

export default App;

const CommentImage = styled.div`
  background-image: url("https://i1.sndcdn.com/avatars-000327828571-9le7ah-t300x300.jpg");
  width: 24px;
  height: 24px;
  margin-right: 20px;
  border-radius: 50%;
  background: no-repeat 50%;
  background-size: cover;  
`

const CommentMain = styled.div`
  flex: 1;
  margin-right: 20px;
  overflow: hidden;  
`

const CommentTime = styled.div`
  box-sizing: border-box;
`

const CommentItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #e3e3e3;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  font-size: 11px;
  overflow: hidden;
`

const CommentsHeaer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  border: 1px solid #e3e3e3;
`

const CommentsBody = styled.div`
  flex: 1;
  overflow: scroll;
`

const Wrapper = styled.div`
  display: flex;
  color: #34495e;
`

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow: scroll;
`;

const CommentsWrapper = styled.div`
  position: relative;
  width: 350px;
  margin-left: -1px;
  border-left: solid 1px #dadce0;
  padding: 24px;
`

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
  height: 100%;
  margin-left: auto;
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LogoIcon = styled.i`
  color: #fff;
  font-size: 20px;
    &::before {
      font-family: 'Material Icons';
      content: "wave";    
    }
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