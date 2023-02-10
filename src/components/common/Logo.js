import FlexBox from "@components/common/FlexBox";
import styled from "styled-components";
import {
  PRIMARY_900,
  PRIMARY_100,
  SECONDARY_900,
  TERTIARY_900,
  LOGO_YELLOW_900,
  LOGO_YELLOW_800,
  LOGO_RED_900,
  LOGO_RED_800,
  LOGO_BLUE_900,
  LOGO_DARK_BLUE_900,
  LOGO_DARK_BLUE_800,
  LOGO_DARK_GREEN_900,
  WHITE,
  BLACK,
} from "@constants/colors";

const LogoWrapper = styled(FlexBox)`
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

const Logo = ({ size, alignself }) => {
  return (
    <LogoWrapper size={size || 70} alignself={alignself}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 68 68"
      >
        <circle
          cx="34"
          cy="34"
          r="32"
          fill={PRIMARY_100}
          data-original={LOGO_YELLOW_900}
        />
        <path
          fill={PRIMARY_900}
          d="M61.14 17.04C55.48 26.07 45.44 32.07 34 32.07s-21.48-6-27.14-15.03C12.51 8.01 22.56 2 34 2s21.49 6.01 27.14 15.04z"
          data-original={LOGO_YELLOW_800}
        />
        <path
          fill={LOGO_RED_900}
          d="M24.677 34.215h2.149v.673h-2.149z"
          data-original={LOGO_RED_900}
        />
        <path
          fill={TERTIARY_900}
          d="M20.95 33.542c0 .748.607 1.346 1.346 1.346h2.924v-1.346c0-.738-.607-1.336-1.346-1.336h-1.578c-.739 0-1.346.598-1.346 1.336z"
          data-original={LOGO_RED_800}
        />
        <path
          fill={LOGO_RED_900}
          d="M55.286 34.215h2.149v.673h-2.149z"
          data-original={LOGO_RED_900}
        />
        <path
          fill={TERTIARY_900}
          d="M61.161 33.542c0 .748-.607 1.346-1.345 1.346h-2.924v-1.346c0-.738.607-1.336 1.345-1.336h1.579c.738 0 1.345.598 1.345 1.336zm-4.954 3.134H25.904a.38.38 0 01-.357-.507l3.07-8.594a4.049 4.049 0 013.813-2.687h17.251a4.049 4.049 0 013.813 2.687l3.07 8.594a.38.38 0 01-.357.507z"
          data-original={LOGO_RED_800}
        />
        <path
          fill={SECONDARY_900}
          d="M53.462 33.04l-1.818-5.088a1.8 1.8 0 00-1.696-1.195H32.163a1.8 1.8 0 00-1.696 1.195L28.65 33.04a.38.38 0 00.357.507h24.1a.38.38 0 00.356-.507z"
          data-original={LOGO_BLUE_900}
        />
        <path
          fill={LOGO_DARK_BLUE_800}
          d="M29.84 42.713v6.452c0 .596-.483 1.078-1.079 1.078h-3.786a1.09 1.09 0 01-1.087-1.087v-6.443zm28.384 0v6.442c0 .601-.488 1.088-1.089 1.088H53.36c-.598 0-1.088-.49-1.088-1.088v-6.442z"
          data-original={LOGO_DARK_BLUE_800}
        />
        <path
          fill={TERTIARY_900}
          d="M58.224 38.573v5.213a3.172 3.172 0 01-3.177 3.168H27.064a3.172 3.172 0 01-3.176-3.168v-5.213a3.174 3.174 0 013.176-3.177h27.983a3.174 3.174 0 013.177 3.177z"
          data-original={LOGO_RED_800}
        />
        <path
          fill={WHITE}
          d="M32.26 40.127v2.093a.63.63 0 01-.636.635h-5.195a.63.63 0 01-.635-.635v-2.093c0-.346.28-.636.635-.636h5.195c.355 0 .635.29.635.636zm24.057 0v2.093a.63.63 0 01-.635.635h-5.195a.63.63 0 01-.635-.635v-2.093c0-.346.28-.636.635-.636h5.195c.355 0 .635.29.635.636z"
          data-original={WHITE}
        />
        <path
          fill={LOGO_DARK_BLUE_800}
          d="M48.096 39.333l-.58 1.43-.27.681-.73 1.813a.499.499 0 01-.476.317h-9.969a.499.499 0 01-.476-.317l-.729-1.813-.271-.682-.58-1.43a.524.524 0 01.486-.71H47.61c.364 0 .617.375.486.71z"
          data-original={LOGO_DARK_BLUE_800}
        />
        <path
          fill={LOGO_DARK_BLUE_900}
          d="M47.516 40.762l-.27.682h-12.38l-.271-.682z"
          data-original={LOGO_DARK_BLUE_900}
        />
        <path
          fill={WHITE}
          d="M44.727 33.55h-8.02l-2.837-6.795h8.02zm3.514 0h-1.902l-2.837-6.795h1.91z"
          data-original={WHITE}
          opacity=".2"
        />
        <path
          fill={LOGO_DARK_BLUE_800}
          d="M15.494 17.65h1.543v32.594h-1.543z"
          data-original={LOGO_DARK_BLUE_800}
        />
        <path
          fill={SECONDARY_900}
          d="M22.693 17.87v11.943a.742.742 0 01-.745.746H10.584a.742.742 0 01-.745-.746V17.87c0-.414.33-.745.745-.745h11.364c.414 0 .745.33.745.745z"
          data-original={LOGO_BLUE_900}
        />
        <path
          fill={WHITE}
          d="M21.168 29.251h-9.804a.218.218 0 01-.218-.217V18.65c0-.12.097-.218.218-.218h9.804c.12 0 .218.097.218.218v10.384c0 .12-.098.217-.218.217zm-9.587-.435h9.369v-9.948h-9.37z"
          data-original={WHITE}
        />
        <path
          fill={WHITE}
          d="M14.234 27.12a.402.402 0 01-.12-.295v-5.638c0-.116.04-.217.12-.3a.392.392 0 01.295-.124h2.1c.583 0 1.06.099 1.428.295s.633.448.792.756.24.638.24.995-.08.687-.24.994-.424.56-.792.756-.845.295-1.428.295h-1.677v1.97a.418.418 0 01-.424.415.402.402 0 01-.294-.119zm2.312-3.059c.627 0 1.068-.12 1.322-.359.255-.24.382-.537.382-.893s-.127-.655-.382-.894c-.254-.24-.695-.36-1.322-.36h-1.594v2.506h1.594z"
          data-original={WHITE}
        />
        <path
          fill={PRIMARY_100}
          d="M16.527 32.195v.379a.261.261 0 01-.523 0v-.38c0-.143.118-.256.262-.256s.261.113.261.257zm0 2.277v.379a.262.262 0 01-.523 0v-.38c0-.143.118-.256.262-.256s.261.113.261.257zm0 2.276v.38a.261.261 0 01-.523 0v-.38c0-.143.118-.257.262-.257s.261.114.261.257zm0 2.277v.38a.261.261 0 01-.523 0v-.38c0-.144.118-.257.262-.257s.261.113.261.257zm0 2.277v.379a.261.261 0 01-.523 0v-.38c0-.143.118-.256.262-.256s.261.113.261.257z"
          data-original={LOGO_YELLOW_900}
        />
        <path
          fill={PRIMARY_100}
          d="M16.527 36.748v.38a.261.261 0 01-.523 0v-.38c0-.143.118-.257.262-.257s.261.114.261.257z"
          data-original={LOGO_YELLOW_900}
        />
        <path
          d="M58.265 53.27c0 .764-10.847 1.383-24.223 1.383s-24.224-.62-24.224-1.382c0-.763 10.847-1.374 24.224-1.374s24.223.61 24.223 1.374z"
          opacity=".07"
          fill={LOGO_DARK_GREEN_900}
          data-original={BLACK}
        />
      </svg>
    </LogoWrapper>
  );
};

export default Logo;
