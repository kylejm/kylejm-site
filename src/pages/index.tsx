import React from "react"
import styled from 'styled-components'
import { graphql, PageProps } from "gatsby"
import Img from "gatsby-image"
import { MyQueryQuery } from "../../graphql-types"
import { Helmet } from 'react-helmet'

const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 200px;
  width: 200px;
  margin: auto;
`

const Grid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;
`

const ColorLink = styled.a<{color: string}>`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
    color: white;
    background-color: ${(props) => props.color};
    transition: all linear 0.1s;
    box-shadow: 2px 2px 6px 1px #b8b8b8;
  }
  padding: 4px 6px;
  border-radius: 6px;
  display: inline-block;
`

const Title = styled.div`
  text-align: center;
`

const H1 = styled.h1`
  font-size: 20pt;
  color: #714ef2;
`

const Subtitle = styled.div`
  text-align: center;
`

const Container = styled.div`
  font-family: "Arial";
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface HomePageProps extends PageProps {
  data: MyQueryQuery
}

const Home: React.FC<HomePageProps> = ({data}) => {
  return (
    <Container>
      <Helmet>
        <title>
          {data.site.siteMetadata.title ?? "kylejm"}
        </title>
      </Helmet>
      <ImageContainer>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageContainer>
      <Title>
        <H1>
          kylejm
        </H1>
      </Title>
      <Subtitle>
        I like to build teams, products and software.
      </Subtitle>
      <Grid>
        {data.site.siteMetadata.links.map((link => (
          <div>
            <ColorLink color={link.color} href={link.url}>
              {link.name}
            </ColorLink>
          </div>    
        )))}
      </Grid>
    </Container>
  )
}

export default Home;

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        links {
          name
          url
          color
        }
      }
    }
  }
`