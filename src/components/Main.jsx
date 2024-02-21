import React from 'react'
import styled from 'styled-components'
export default function Main() {
  return (
    <Wrap>
      <img src="/images/main_img.png" alt="메인 사진" />
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-top: 230px;
  width: 100%;
  display: flex;
  justify-content: center;
`
