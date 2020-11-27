import styled, { ThemeProvider } from "styled-components";

const DIVBG = styled.div`
  background-color: ${(props) => props.theme.bg};
  width: 90%;
  padding: 10vh 0px;
  margin: 10px auto;
  color: white;
`;

export default function StyledComp(props) {
  const theme = { bg: props.color };
  return (
    <ThemeProvider theme={theme}>
      <DIVBG>
        <h2>Styled-component + ThemeProvider (props) </h2>
      </DIVBG>
    </ThemeProvider>
  );
}
