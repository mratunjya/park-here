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
}) => {
  return (
    <CustomImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      backgroundcolor={backgroundcolor}
      borderadius={borderadius}
      objectfit={objectfit}
      objectposition={objectposition}
      alignself={alignself}
      quality={quality || 60}
      priority={priority || true}
      padding={padding || "0"}
      draggable={false}
    />
  );
};

export default CommonImage;
