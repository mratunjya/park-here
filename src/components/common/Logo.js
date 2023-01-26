import { AiFillCar } from "react-icons/ai";
import styled from "styled-components";

const LogoWrapper = styled(AiFillCar)`
  ${(props) => `
        align-self: ${props.alignself || "center"};
    `}
`;

const Logo = ({ alignself }) => {
  return <LogoWrapper size={96} alignself={alignself}></LogoWrapper>;
};

export default Logo;
