import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Test = () => {
  return (
    <>
      <TextStyled variant="contained">Test</TextStyled>
    </>
  );
};

interface ItextStyled {
  variant?: string;
}

const TextStyled = styled(Button)`
  && {
    background-color: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.background};
  }
`;

// const TextStyled = styled(Button)(({ theme }) => ({
//   backgroundColor: theme.color.secondary,
//   borderRadius: "100%",
// }));
// background-color: ${(props) => props.theme.color.secondary};
//   color: ${(props) => props.theme.color.secondary};
export default Test;
