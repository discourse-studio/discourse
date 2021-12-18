import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
`
const Video = styled.iframe`
  width: 100vw;
  height: 56.25vw;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  min-width: 177.77vh;
  min-width: calc(var(--vh, 1vh) * 177.77);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
`

export default function VimeoPlayer(props) {
  return (
    <VideoWrapper>
      <Video
        src={props.Src}
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      />
    </VideoWrapper>
  )
}
