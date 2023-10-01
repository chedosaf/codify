import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

import AxisX from './components/AxisX/AxisX'
import AxisY from './components/AxisY/AxisY'
import MainGraf from './components/MainGraf/MainGraf'

const valuesY = [10000, 5000, 2000, 1000, 500, 0]

const ChartContainer = styled.div`
  width: 995px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 27px;
  background: rgba(255, 0, 245, 0.05);
  margin: auto;
  padding: 40px;
`
const AxisYMainGrafContainer = styled.div`
  display: flex;
`


const Chart = ({ values = {} }) => {
  const valuesGraf = Object.values(values).map((i) => ({ value: i, id: uuidv4() }))
  const valuesX = Object.keys(values)

  return (
    <ChartContainer>
      <AxisYMainGrafContainer>
        <AxisY values={valuesY}></AxisY>
        <MainGraf values={valuesGraf}></MainGraf>
      </AxisYMainGrafContainer>
      <AxisX values={valuesX}></AxisX>
    </ChartContainer>
  )
}

export default Chart