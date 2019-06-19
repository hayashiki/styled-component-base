import React from 'react';
import styled from 'styled-components'

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

const HeartIcon = styled.div`
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-size: 14px;
`

export const CardItem = props => (
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
)

export default CardItem