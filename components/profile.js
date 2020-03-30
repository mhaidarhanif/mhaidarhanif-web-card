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

  border-radius: 10px;
  background-color: #ffffff;
  margin: 50px;
  max-width: 700px;
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
    text-align: left;
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

const Description = styled.div`
  color: #333333;
  font-size: 1em;
  line-height: 1.2em;

  @media (max-width: 650px) {
    font-size: 1.2em;
  }
`

const Profile = props => (
  <Card>
    <Photo image='/photos/mhaidarhanif.jpg'>
      <Name>M Haidar Hanif</Name>
    </Photo>

    <Content>
      <Description>
        <p>Hello! I am Haidar.</p>
        <p>An Educator, Engineer, Designer, Innovator, and Consultant.</p>
        <p>
          Founder of multiple ventures: <a href='https://azobu.com'>Azobu</a>,{' '}
          <a href='https://highskillmasters.com'>High Skill Masters</a>,{' '}
          <a href='https://impactbyte.com/about'>Impact Byte</a>.
        </p>
        <p>
          I solve problems in technology, design, business, marketing, and life.
        </p>
      </Description>

      <SocialLinks />
    </Content>
  </Card>
)

export default Profile
