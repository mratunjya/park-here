import { AiFillCar } from "react-icons/ai";
import styled from "styled-components";

const LogoWrapper = styled(AiFillCar)`
  display: block;
  aspect-ratio: 1/1 !important;
  ${(props) => `
        align-self: ${props.alignself || "center"};
        width: ${props.size}px;
        min-width: ${props.size}px;
        max-width: ${props.size}px;
        height: ${props.size}px;
        min-height: ${props.size}px;
        max-height: ${props.size}px;
    `}
`;

const Logo = ({ alignself }) => {
  return <LogoWrapper size={70} alignself={alignself}></LogoWrapper>;
};

export default Logo;
