import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    ${(props) =>
    props.type === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 800;
      text-align: center;
    `}
  line-height:1.4;
`;
export default Heading;
