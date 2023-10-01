import styled from 'styled-components'

const AxisXContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 94px;
`
const mounthConvert = {
  January: 'Янв',
  February: 'Фев',
  March: 'Март',
  April: 'Апр',
  May: 'Май',
  June: 'Июнь',
  July: 'Июль',
  August: 'Авг',
  September: 'Сент',
  October: 'Окт',
  November: 'Нояб',
  December: 'Дек'
}

const dayConvert = {
  "1": '01',
  "2": '',
  "3": '',
  "4": '',
  "5": '05',
  "6": '',
  "7": '',
  "8": '',
  "9": '',
  "10": '10',
  "11": '',
  "12": '',
  "13": '',
  "14": '',
  "15": '15',
  "16": '',
  "17": '',
  "18": '',
  "19": '',
  "20": '20',
  "21": '',
  "22": '',
  "23": '',
  "24": '',
  "25": '25',
  "26": '',
  "27": '',
  "28": '',
  "29": '',
  "30": '30',
  "31": ''
}


const dataParse = (values) => {
  if (values.length > 14) {
    return values.map((value) => dayConvert[value])
  } else {
    return values.map((value) => mounthConvert[value])
  }
}

const AxisX = ({ values }) => {
  return (
    <AxisXContainer>
      {dataParse(values).map((value, i) =>
        <div key={i}>{value}</div>
      )}
    </AxisXContainer>
  )
}

export default AxisX