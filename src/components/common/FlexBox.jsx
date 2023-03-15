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
  border-radius: ${(props) => props.borderadius || "0"};
  gap: ${(props) => props.gap || "0"};
  max-width: ${(props) => props.maxwidth || "none"};
  background-color: ${(props) => props.backgroundcolor || "transparent"};

  ${(props) =>
    props.boxshadow &&
    css`
      box-shadow: ${props.boxshadow};
    `}

  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}

  ${(props) =>
    props.display &&
    css`
      display: ${props.display};
    `}


  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props) =>
    props.minheight &&
    css`
      min-height: ${props.minheight};
    `}

  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}

  ${(props) =>
    props.fontweight &&
    css`
      font-weight: ${props.fontweight};
    `}

  ${(props) =>
    props.fontsize &&
    css`
      font-size: ${props.fontsize};
    `}

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${(props) =>
    props.texttransform &&
    css`
      text-transform: ${props.texttransform};
    `}

  ${(props) =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
  
  ${(props) =>
    props.overflowx &&
    css`
      overflow-x: ${props.overflowx};
    `}
  
  ${(props) =>
    props.overflowy &&
    css`
      overflow-y: ${props.overflowy};
    `}

  ${(props) =>
    props.zindex &&
    css`
      z-index: ${props.zindex};
    `}

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
    border-radius: ${(props) =>
      props.borderadiusmobile || props.borderadius || "0"};
    gap: ${(props) => props.gapmobile || props.gap || "0"};
    max-width: ${(props) => props.maxwidthmobile || props.maxwidth || "none"};
    background-color: ${(props) =>
      props.backgroundcolormobile || props.backgroundcolor || "transparent"};

    ${(props) =>
      props.heightmobile &&
      css`
        height: ${props.heightmobile};
      `}

    ${(props) =>
      props.minheightmobile &&
      css`
        min-height: ${props.minheightmobile};
      `}


    ${(props) =>
      props.fontweightmobile &&
      css`
        font-weight: ${props.fontweightmobile};
      `}

    ${(props) =>
      props.fontsizemobile &&
      css`
        font-size: ${props.fontsizemobile};
      `}

    ${(props) =>
      props.colormobile &&
      css`
        color: ${props.colormobile};
      `}

    ${(props) =>
      props.texttransformmobile &&
      css`
        text-transform: ${props.texttransformmobile};
      `}

    ${(props) =>
      props.desktoponly &&
      css`
        display: none;
      `}

    ${(props) =>
      props.overflowmobile &&
      css`
        overflow: ${props.overflowmobile};
      `}
    
    ${(props) =>
      props.overflowxmobile &&
      css`
        overflow-x: ${props.overflowxmobile};
      `}

    ${(props) =>
      props.overflowymobile &&
      css`
        overflow-y: ${props.overflowymobile};
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
