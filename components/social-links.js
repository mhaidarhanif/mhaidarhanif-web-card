import React from 'react'
import styled from '@emotion/styled'

const Lists = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin-top: 30px;
`

const List = styled.li`
  letter-spacing: 1px;
`

const ExternalLink = styled.a`
  color: ${props => props.color};
`

const links = [
  {
    url: 'https://fb.me/mhaidarhanif',
    name: 'Facebook',
    color: '#4267B2'
  },
  {
    url: 'https://instagram.com/mhaidarh',
    name: 'Instagram',
    color: '#b900b4'
  },
  {
    url: 'https://github.com/mhaidarh',
    name: 'GitHub',
    color: '#24292e'
  },
  {
    url: 'https://twitter.com/mhaidarh',
    name: 'Twitter',
    color: '#1DA1F2'
  },
  {
    url: 'https://linkedin.com/in/mhaidarhanif',
    name: 'LinkedIn',
    color: '#2867B2'
  }
]

const SocialLinks = props => (
  <Lists>
    {links.map(({ url, name, color }, key) => {
      return (
        <List>
          <ExternalLink target='_blank' href={url} color={color}>
            {name}
          </ExternalLink>
        </List>
      )
    })}
  </Lists>
)

export default SocialLinks