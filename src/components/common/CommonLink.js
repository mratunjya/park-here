import Link from "next/link";
import styled from "styled-components";

const CommonLinkComponent = styled(Link)`
  align-self: ${(props) => props.alignself || "auto"};
  @media (max-width: 768px) {
    align-self: ${(props) =>
      props.alignselfmobile || props.alignself || "auto"};
  }
`;

const CommonLink = ({ href, children, alignself, alignselfmobile }) => {
  return (
    <CommonLinkComponent
      href={href}
      alignself={alignself}
      alignselfmobile={alignselfmobile}
    >
      {children}
    </CommonLinkComponent>
  );
};

export default CommonLink;
