import styled from 'styled-components'

import Pillar from './components/Pillar'

const MainGrafContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: space-between;
  margin-left: 47px;
`

const MainGraf = ({ values }) => {
  return (<MainGrafContainer>
    {values.map((value, i) => <Pillar key={i} value={value} />)}
  </MainGrafContainer>)
}

export default MainGraf