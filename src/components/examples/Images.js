import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../assets/images/recipe-1.jpeg"
        alt="food"
        placeholder="tracedSVG"
        layout="constrained"
        className="example-image"
        as="section"
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border: 2px solid green;
  width: 70vw;
  margin: 0 auto;
`

export default Images
