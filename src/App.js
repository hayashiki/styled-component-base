import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
// import NavContainer from './components/NavContainer';

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
        <BodyCard>
          <BodyCardInner>
            <BodyCardImg 
              src="https://i1.sndcdn.com/artworks-000086872057-k6h2xo-t300x300.jpg"
            />
            <div className="artwork-play " role="button" tabIndex="0">
              <i className="artwork-play__icon ion-ios-play"></i>
            </div>
            <BodyCardMain>
              <BodyCardAvatar 
                src="https://i1.sndcdn.com/avatars-000345894344-23xtpu-large.jpg"
              />
              <BodyCardDetail>
                <BodyCardTitle
                  href="/#/songs/161275114"
                  title="Deorro ft. DyCy"
                >
                  Five Hours
                </BodyCardTitle>
                <BodyCardUsername
                  href="/#/users/63493914"
                  title="EDM.com"
                >EDM.com                  
                </BodyCardUsername>
              </BodyCardDetail>
            </BodyCardMain>

            <HeartIcon>
              <span className="popover__trigger" role="button" tabIndex="0">
                <div className="heart__inner">
                <i className="heart__icon ion-ios-heart">aaa</i>
                </div>
              </span>
            </HeartIcon>
          </BodyCardInner>
        </BodyCard>
      </ItemsContainer>
    </div>
  );
}

export default App;

const HeartIcon = styled.div`
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-size: 14px;
`

const BodyCardAvatar = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background: no-repeat 50%;
  background-size: cover;
  border-radius: 50%;
`
const BodyCardDetail = styled.div`
  flex: 1;
  overflow: hidden;  
`

const BodyCardTitle = styled.a`
  display: block;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  color: #222;
`

const BodyCardUsername = styled.a`
  display: block;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const BodyCardMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const BodyCardImg = styled.div`
  height: 70px;
  margin-bottom: 10px;
  background: no-repeat 50%;
  background-size: cover;  
  background-image: url(https://i1.sndcdn.com/artworks-000086872057-k6h2xo-t300x300.jpg);
`

const BodyCardInner = styled.div`
  position: relative;
  padding: 10px;
  z-index: 0;
`

const BodyCard = styled.div`
  position: relative;
  width: 218px;
  background-color: #fff;
  border: 1px solid #e3e3e3;
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