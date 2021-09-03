import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Props from './TestComponent.types';

const TestComponent: FC<Props> = ({ title }: Props): JSX.Element => {
  return (
    <>
      <div className="teste">{title}</div>
      <div style={{ color: 'red' }}>
        <FormattedMessage id="yes" />
      </div>
    </>
  );
};

export default TestComponent;
