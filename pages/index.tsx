import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import meImage from '../public/me.jpg'
import Image from 'next/image'
import getConfig from 'next/config'
import { SiteTitle } from '../components/title'
import useMediaQuery from '../helpers/media-query'
import ColorLink from '../components/color-link'

const { publicRuntimeConfig } = getConfig()

const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 200px;
  width: 200px;
  margin: auto;

  @media (max-width: 1024px) {
    height: 30%;
    width: 30%;
  }
`

const Grid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;
`

const CenterContainer = styled.div`
  font-family: "Arial";
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Home: React.FC = () => {
  const isBreakpoint = useMediaQuery(1024)
  
  return (
    <>
      <Head>
        <title>
          {publicRuntimeConfig.siteMetadata.title}
        </title>
      </Head>
      {isBreakpoint ? <Mobile />  : <Desktop />}
    </>
  )
}

const Desktop: React.FC = () => {
  const links: { color: string; url: string; name: string }[] = publicRuntimeConfig.siteMetadata.links
  return (
    <CenterContainer>
      <ImageContainer>
        <Image src={meImage} />
      </ImageContainer>
      <SiteTitle />
      <Grid>
        {links.map((link => (
          <div key={link.url}>
            <ColorLink color={link.color} href={link.url}>
              {link.name}
            </ColorLink>
          </div>    
        )))}
      </Grid>
    </CenterContainer>
  )
}

const Mobile: React.FC = () => {
  return (
    <>
      <ImageContainer>
        <Image src={meImage} />
      </ImageContainer>
      <SiteTitle />
    </>
  )
}

export default Home;
