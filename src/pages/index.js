import { useState } from 'react';
import styled from 'styled-components'

import Select from '@/components/Select/Select';
import StyledJsxRegistry from '@/lib/registry';

import Chart from '../components/Chart/Chart';
import mockData from '../mockData/data'



const Main = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
`
const Wrapper = styled.div`
  width: 995px;
  display: flex;
  flex-direction: column;
  align-items: end ;
`

const periods = [{ item: 'month', label: "За последний месяц" }, { item: 'year', label: "За последний год" }, { item: 'half_year', label: "За последние 6 месяцев" }]

const Home = () => {

  const [period, setPeriod] = useState('')

  const data = mockData.periods[0].graph[period]

  return (
    <StyledJsxRegistry>
      <Main>
        <Wrapper>
          <Select label="Выберите период" values={periods} onChange={(v) => setPeriod(v)} />
          <Chart values={data} />
        </Wrapper>
      </Main>
    </StyledJsxRegistry>
  )
}

export default Home;