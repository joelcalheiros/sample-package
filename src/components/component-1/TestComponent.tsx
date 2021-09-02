import React, { FC } from "react";
import { FormattedMessage } from "react-intl";
import Props from "./TestComponent.types";

const TestComponent: FC<Props> = ({ title }: Props): JSX.Element => {
  return (
    <>
      <div style={{ color: "red" }}>red</div>
      <div className="teste">
        {title} - <FormattedMessage id="yes" />
      </div>
    </>
  );
};

export default TestComponent;
