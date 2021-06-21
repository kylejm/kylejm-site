import React from "react"
import styled from "styled-components"

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

export default ColorLink