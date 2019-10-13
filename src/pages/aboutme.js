import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutText = styled.p`
`
const TextBlock = styled.p`
  display:block;
`

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`

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
const AboutMe = () => (
  <Layout>
    <SEO title="AboutMe" keywords={[`gatsby`, `application`, `react`]} />
    <OuterContainer>
      <Container>
        <Heading>About Me</Heading>
        <AboutText>
          <TextBlock>Most of my time revolves around writing code and building software.</TextBlock>
          <TextBlock>My major work has been with the JS stack. I love playing around with new technologies and tools.</TextBlock>
          <TextBlock>When I am not working, I enjoy reading books, binge watching seasons or documentaries. </TextBlock>
        </AboutText>
      </Container>
    </OuterContainer>
  </Layout>
)

export default AboutMe


