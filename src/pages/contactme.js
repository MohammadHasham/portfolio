import React, { useState } from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FormElement = styled.div`
  display: block;
  margin-top: 2rem;
`;

const InputElement = styled.input`
  width: 100%;
  border: 0px;
  border-bottom: 1px solid black;
  outline-color:white;
`;

const TextAreaElement = styled.textarea`
  width: 100%;
  border: 0px;
  border-bottom: 1px solid black;
  outline-color:white;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
`

function ContactMe() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sendDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('//formspree.io/muhammad.hasham.2311@gmail.com', {
        method: 'POST', // or 'PUT'
        body: state, // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const { name, email, message } = state;
  return (
    <Layout>
      <SEO title="AboutMe" keywords={[`gatsby`, `application`, `react`]} />
      <Heading>Contact Me</Heading>
      <form onSubmit={sendDetails}>
        <FormElement>
          <InputElement type="text" name="name" value={name} onChange={(e) => setState({ ...state, name: e.target.value })} placeholder="Name" />
        </FormElement>
        <FormElement>
          <InputElement type="email" name="email" value={email} onChange={(e) => setState({ ...state, email: e.target.value })} placeholder="Email" required />
        </FormElement>
        <FormElement>
          <TextAreaElement name="message" value={message} onChange={(e) => setState({ ...state, message: e.target.value })} placeholder="Message" />
        </FormElement>
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  )
}

export default ContactMe


