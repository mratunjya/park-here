import Image from "next/image";
import styled, { css } from "styled-components";

const CustomImage = styled(Image)`
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.backgroundcolor || "transparent"};
  border-radius: ${(props) => props.borderadius || "0"};
  object-fit: ${(props) => props.objectfit || "fill"};
  object-position: ${(props) => props.objectposition || "center"};
  align-self: ${(props) => props.alignself || "center"};
  padding: ${(props) => props.padding || "0"};

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
    `}

  ${(props) =>
    props.top &&
    css`
      top: ${props.top};
    `}

  ${(props) =>
    props.left &&
    css`
      left: ${props.left};
    `}

  @media (max-width: 768px) {
    width: ${(props) => props.widthmobile || props.width || "100%"};
    background-color: ${(props) =>
      props.backgroundcolormobile || props.backgroundcolor || "transparent"};
    border-radius: ${(props) =>
      props.borderadiusmobile || props.borderadius || "0"};
    object-fit: ${(props) =>
      props.objectfitmobile || props.objectfit || "fill"};
    object-position: ${(props) =>
      props.objectpositionmobile || props.objectposition || "center"};
    align-self: ${(props) =>
      props.alignselfmobile || props.alignself || "center"};
    padding: ${(props) => props.paddingmobile || props.padding || "0"};
`;

const CommonImage = ({
  src,
  alt,
  backgroundcolor,
  width,
  height,
  borderadius,
  objectfit,
  objectposition,
  alignself,
  quality,
  priority,
  padding,
  widthmobile,
  heightmobile,
  backgroundcolormobile,
  borderadiusmobile,
  objectfitmobile,
  objectpositionmobile,
  alignselfmobile,
  paddingmobile,
  position,
  top,
  left,
}) => {
  return (
    <CustomImage
      src={src}
      alt={alt}
      width={width}
      widthmobile={widthmobile}
      height={height}
      heightmobile={heightmobile}
      backgroundcolor={backgroundcolor}
      backgroundcolormobile={backgroundcolormobile}
      borderadius={borderadius}
      borderadiusmobile={borderadiusmobile}
      objectfit={objectfit}
      objectfitmobile={objectfitmobile}
      objectposition={objectposition}
      objectpositionmobile={objectpositionmobile}
      alignself={alignself}
      alignselfmobile={alignselfmobile}
      quality={quality || 60}
      priority={priority || true}
      padding={padding || "0"}
      paddingmobile={paddingmobile || "0"}
      draggable={false}
      position={position}
      top={top}
      left={left}
    />
  );
};

export default CommonImage;
