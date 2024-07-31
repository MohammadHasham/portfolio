import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`

const IconLink = styled.a`
  font-size: 2rem;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>Software Developer</Description>
          <IconsContainer>
            <IconLink href="https://github.com/muhammadhasham23" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </IconLink>
            <IconLink href="https://stackoverflow.com/users/5915016/mohhamad-hasham" target="_blank" rel="noopener noreferrer">
              <FaStackOverflow />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/muhammad-hasham/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </IconLink>
          </IconsContainer>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingBio
