import styled from 'styled-components'

const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;

  & span {
    visibility: hidden;
    height: 24px;
    border-radius: 6px;
    background: #65FF8E;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    display: flex;
    padding: 0px 8px;
    position: absolute;
    z-index: 1;
    top: ${props => props.$height};
    left: -120%;
    margin-top: 5px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover span {
  visibility: visible;
  opacity: 1;
}
`


const Tooltip = ({ text, children, height }) => {

  return (
    <TooltipContainer $height={88 - height + "%"}>
      <span>{text}</span>
      {children}
    </TooltipContainer>
  );
}

export default Tooltip;