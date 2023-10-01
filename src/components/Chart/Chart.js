import styled from 'styled-components'

import AxisX from './components/AxisX/AxisX'
import AxisY from './components/AxisY/AxisY'
import MainGraf from './components/MainGraf/MainGraf'

const valuesY = [10000, 5000, 2000, 1000, 500, 0]
const valuesX = {
  year: ['Янв', 'Фев', "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Окт", "Нояб", "Дек"],
  half: ['Янв', 'Фев', "Март", "Апр", "Май", "Июнь"],
  mounth: ['30', '25', '20', '15', '10', '05', '01'],
  data: ['3000', '4000', '1100', '27', '26', '25', '24', '10000', '500', '2000', '5000', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '21', '20', '19', '18', '17', '16', '15']
}

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
  const valuesGraf = Object.values(values)
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