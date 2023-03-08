import styled, { css } from "styled-components";

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

  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.directionmobile || props.direction || "row"};
    justify-content: ${(props) =>
      props.justifymobile || props.justify || "flex-start"};
    align-items: ${(props) => props.alignmobile || props.align || "flex-start"};
    flex-wrap: ${(props) => props.wrapmobile || props.wrap || "nowrap"};
    flex-grow: ${(props) => props.growmobile || props.grow || "0"};
    flex-shrink: ${(props) => props.shrinkmobile || props.shrink || "1"};
    flex-basis: ${(props) => props.basismobile || props.basis || "auto"};
    order: ${(props) => props.ordermobile || props.order || "0"};
    align-self: ${(props) =>
      props.alignselfmobile || props.alignself || "auto"};
    justify-self: ${(props) =>
      props.justifyselfmobile || props.justifyself || "auto"};
    padding: ${(props) => props.paddingmobile || props.padding || "0"};
    margin: ${(props) => props.marginmobile || props.margin || "0"};
    width: ${(props) => props.widthmobile || props.width || "inherit"};
    height: ${(props) => props.heightmobile || props.height || "inherit"};
    border-radius: ${(props) =>
      props.borderadiusmobile || props.borderadius || "0"};
    gap: ${(props) => props.gapmobile || props.gap || "0"};
    max-width: ${(props) => props.maxwidthmobile || props.maxwidth || "none"};
    background-color: ${(props) =>
      props.backgroundcolormobile || props.backgroundcolor || "transparent"};

    ${(props) =>
      props.desktoponly &&
      css`
        display: none;
      `}
  }

  @media (min-width: 768px) {
    ${(props) =>
      props.mobileonly &&
      css`
        display: none;
      `}
  }
`;

export default FlexBox;
