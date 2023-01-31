import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-grow: ${(props) => props.grow || "0"};
  flex-shrink: ${(props) => props.shrink || "1"};
  flex-basis: ${(props) => props.basis || "auto"};
  order: ${(props) => props.order || "0"};
  align-self: ${(props) => props.alignself || "auto"};
  justify-self: ${(props) => props.justifyself || "auto"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "inherit"};
  height: ${(props) => props.height || "inherit"};
  border-radius: ${(props) => props.borderadius || "0"};
  gap: ${(props) => props.gap || "0"};
  max-width: ${(props) => props.maxwidth || "none"};
  background-color: ${(props) => props.backgroundcolor || "transparent"};
`;

export default FlexBox;
