import styled, { keyframes } from 'styled-components'

import Tooltip from "./Tooltip";

const PillarContainer = styled.div`
  width: 16px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`
const pillarShow = keyframes`
  from {
    height: 0;
  } 
  to {
    height: ${(props) => `${props.$height}%`};
  }
`

const PillarColumn = styled.div`
  height: ${(props) => `${props.$height}%`};
  width: 16px;
  background: #000AFF;
  animation: ${pillarShow} 1s forwards;
  border-radius: 4px;
  justify-self: end;
  &:hover {
    border-radius: 4px;
    background: #000AFF;
    box-shadow: 0px 0px 8px 6px rgba(0, 10, 255, 0.15);
  }
`
const getHeight = (v) => {
  let h
  switch (true) {
    case (v <= 500):
      h = [20, 500]
      break;
    case (500 < v && v <= 1000):
      h = [40, 1000]
      break;
    case (1000 < v && v <= 2000):
      h = [60, 2000]
      break;
    case (2000 < v && v <= 5000):
      h = [80, 5000]
      break;
    case (5000 < v && v <= 10000):
      h = [100, 10000]
      break;
  }
  return h
}

const Pillar = ({ value }) => {
  const [procent, limit] = getHeight(value)
  const height = procent - ((limit - value) / limit * 20)
  return (
    <PillarContainer $height={height}>
      <Tooltip text={value} height={height}>
        <PillarColumn $height={height}></PillarColumn>
      </Tooltip>
    </PillarContainer>)
}

export default Pillar