import React from 'react'
import Link from 'next/link'

import Page from '../components/page'
import Head from '../components/head'
import Profile from '../components/profile'
import Center from '../components/center'

const Home = () => (
  <Page>
    <Head
      title='M Haidar Hanif'
      description='Educator, Engineer, Entrepreneur. Tackling things in technology, design, business, marketing, and life.'
      url='https://mhaidarhanif.com'
      ogImage='/photos/mhaidarhanif.jpg'
    />

    <Center>
      <Profile />
    </Center>
  </Page>
)

export default Home
