import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.div`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  const State = styled.div`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <div>
      <Temp>{temp}℃</Temp>
      <State>{condition}</State>
    </div>
  );
};

export default Condition;
