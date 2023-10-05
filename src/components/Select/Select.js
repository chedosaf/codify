import { useState } from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import arrowdown from './icons/ArrowDown.svg'
import arrowup from './icons/ArrowUp.svg'



const SelectContainer = styled.div`
position: relative;
margin-bottom: 24px;
`

const SelectLabelButton = styled.button`
width: 380px;
height: 48px;
font-size: 24px;
display: flex;
padding: 0 20px;
justify-content: space-between;
align-items: center;
line-height: 30px;
background: #fff;
border-radius: 28px;
border: 2px solid #000AFF;
`

const DropdownStyle = styled.div`
position: absolute;
top: 48px;
left: 0;
z-index: 2;
padding: 20px;
width: 380px;
font-size: 24px;
line-height: 30px;
border-radius: 28px;
border: 2px solid #000AFF;
background: #FFF;
display: flex;
flex-direction: column;
gap: 16px;
transition: max-height 0.2s ease;
${(p) =>
    p.isvisible !== true &&
    css`
visibility: hidden;
`}
`

const DropdownItem = styled.div`
display: flex;
width: 281px;
height: 30px;
justify-content: start;
align-items: center;
flex-shrink: 0;
cursor: pointer;
${(p) =>
    p.$active &&
    css`
display: none;
`}
`

const IconWrapper = styled.div`
  cursor: pointer;
`

const Select = ({
  label,
  values,
  onChange
}) => {

  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };


  const handleValueChange = (value) => {
    setCurrentValue(value);
  };

  const handleChange = (value) => {
    handleValueChange(value.label);
    if (onChange) onChange(value.item);
    handleOpen();
  };
  return (
    <SelectContainer>
      <SelectLabelButton>
        {currentValue !== "" ? currentValue : label}
        {open ?
          <IconWrapper onClick={handleOpen}>
            <Image
              src={arrowup}
              alt="Follow us on Twitter"
            />
          </IconWrapper> :
          <IconWrapper onClick={handleOpen}>
            <Image
              src={arrowdown}
              alt="Follow us on Twitter"
            /></IconWrapper>}
      </SelectLabelButton>
      <DropdownStyle isvisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            $active={value.label === currentValue}
            key={index}>
            {value.label}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default Select