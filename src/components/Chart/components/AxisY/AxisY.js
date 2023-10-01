import styled from 'styled-components'

import { numFormatter } from "../../../../helpers/numFormater"

const AxisYContainer = styled.div`
  height: 280px;
  width: fit-content;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`

const AxisY = ({ values }) => {
  return (<AxisYContainer>
    {values.map((value, i) => <div key={i}>{numFormatter(value)}</div>)}
  </AxisYContainer>)
}

export default AxisY