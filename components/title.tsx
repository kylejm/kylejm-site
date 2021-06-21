import React from "react"
import styled, { keyframes } from "styled-components"
import getConfig from 'next/config'

const colorAnim = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

export const GradientTitle = styled.h1`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
	font-size: 3rem;
	/* font-weight:  bold; */
	letter-spacing: 2px;
	text-align: center;
	color: #714ef2;
	background: linear-gradient(270deg, #9f42ea, #42b5ea);
  background-size: 300% 300%;

  background-clip: text;
	-webkit-background-clip: text;

	-webkit-text-fill-color: transparent;
  animation-name: ${colorAnim};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const { publicRuntimeConfig } = getConfig()
export const SiteTitle = () => {
  return <GradientTitle>{publicRuntimeConfig.siteMetadata.title}</GradientTitle>
}

const SubtitleContainer = styled.div`
  text-align: center;
`

export const Subtitle = () => {
  return (
    <SubtitleContainer>
      I like to build teams, products and software.
    </SubtitleContainer>
  )
}
