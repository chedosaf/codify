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
  height: ${(props) => props.$height};
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

const Pillar = ({ value }) => {
  const height = value / 10000 * 100
  return (
    <PillarContainer $height={height}>
      <Tooltip text={value} height={height}>
        <PillarColumn $height={height + "%"}></PillarColumn>
      </Tooltip>
    </PillarContainer>)
}

export default Pillar