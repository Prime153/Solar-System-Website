import React, { useState } from 'react';
import HeadingTwoFaces from '../../Atoms/HeadingTwoFaces/HeadingTwoFaces';
import Line from '../../Atoms/Line/Line';
import {
  Container,
  InOutTextContainer,
  InputValue,
} from './CalculatorWrapperStyled';

const CalculatorWrapper = () => {
  const [monthlyCost, changeCost] = useState(0);
  // const inputValue = parseInt(e.target.value);
  // adding "number" type, NaN is mother*ucker

  return (
    <Container>
      <div>
        <HeadingTwoFaces firstW="Fotovoltaic" secondW="Calculator" />
      </div>
      <InOutTextContainer>
        Monthly energy cost
        <InputValue
          onChange={(e) => changeCost(e.target.value)}
          type="number"
          min="0"
        ></InputValue>
        PLN/Month
      </InOutTextContainer>
      <Line change="calc" />
      <div>
        <p>Annual electricity cost: {monthlyCost * 12} PLN</p>
        <p>kWh per month: {Math.ceil(monthlyCost * 1.665)} kWh</p>
        <p>kWh per year: {Math.ceil(monthlyCost * 1.665) * 12} kWh</p>
      </div>
      <Line change="calc" />
      <InOutTextContainer>
        Installation power required:{' '}
        {Math.ceil(
          (Math.ceil(monthlyCost * 1.665) * 12 * 1.2) / 1000,
        )}{' '}
        kW
      </InOutTextContainer>
    </Container>
  );
};

export default CalculatorWrapper;
