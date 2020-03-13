import React from 'react'
import styled from 'styled-components'

interface StepperProps {
  value: number;
  increase: () => void;
  decrease: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  background-color: transparent;
  border: 0;
`

const Value = styled.div`
margin-left: 12pt;
margin-right: 12pt;
color: ${props => props.theme.colors.darkGrey};
`

export const Stepper: React.FunctionComponent<StepperProps> = ({ increase, value, decrease }: StepperProps) => {
  return (
    <Container>
      <Button onClick={decrease}>
        <img src="/static/images/RemoveCircle.png" srcSet="/static/images/RemoveCircle@2x.png 2x, /static/images/RemoveCircle@3x.png 3x" />
      </Button>
      <Value>
        {value}
      </Value>
      <Button onClick={increase}>
        <img src="/static/images/AddCircle.png" srcSet="/static/images/AddCircle@2x.png 2x, /static/images/AddCircle@3x.png 3x" />
      </Button>
    </Container>
  )
}
