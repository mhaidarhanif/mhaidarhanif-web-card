import React from 'react'
import styled from '@emotion/styled'

import SocialLinks from './social-links.js'

const Card = styled.div`
  @media (max-width: 650px) {
    border-radius: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  border-radius: 5px;
  background-color: #ffffff;
  margin: 50px;
  max-width: 600px;
`

const Photo = styled.div`
  border-radius: 5px 5px 0 0;
  background: #000000;
  background-image: url(${props => props.image});
  background: linear-gradient(hsla(0, 0%, 0%, 0%), hsla(0, 0%, 0%, 80%)),
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 650px) {
    border-radius: 0;
  }
`

const Content = styled.div`
  text-align: center;
  padding: 30px 60px;

  @media (max-width: 650px) {
    padding: 15px 30px;
  }
`

const Name = styled.h1`
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 5px;

  @media (max-width: 650px) {
    font-size: 1.5em;
  }
`

const Description = styled.p`
  color: #333333;
  line-height: 1.5em;
`

const Profile = props => (
  <Card>
    <Photo image='/static/photos/mhaidarhanif.jpg'>
      <Name>M Haidar Hanif</Name>
    </Photo>
    <Content>
      <Description>
        Hello, world! I am Haidar. A human who tackles things in technology,
        design, business, marketing, and life.
      </Description>
      <SocialLinks />
    </Content>
  </Card>
)

export default Profile
