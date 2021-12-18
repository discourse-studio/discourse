import React from "react"
import styled from "styled-components"
import useSound from "use-sound"
import riff from "../assets/sounds/riff.mp3"
import MarkAnimation from "./MarkAnimation"

const LogoType = styled.h1`
  align-self: flex-start;
  font-size: 7vw;
  line-height: 0.9;
  cursor: pointer;
  transform: scale(1);
  transform-origin: top left;
  transition: transform cubic-bezier(0.73, -0.56, 0.58, 1) 900ms;

  &:hover {
    transform: scale(3.09);
    animation-name: ${MarkAnimation};
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
  }

  @media only screen and (max-width: 501px) {
    font-size: 12vw;

    &:hover {
      transform: scale(1.75);
    }
  }
`

const Mark = () => {
  const [play, { pause }] = useSound(riff, {
    loop: true,
  })

  return (
    <LogoType
      role="banner"
      onMouseEnter={() => play()}
      onMouseLeave={() => pause()}
    >
      Discourse
    </LogoType>
  )
}

export default Mark
