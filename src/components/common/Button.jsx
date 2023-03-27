import styled, { css } from 'styled-components';
import { PRIMARY_900, PRIMARY_800, WHITE } from '@constants/colors';

export const SmallButton = styled.button`
  background-color: ${(props) => props.backgroundcolor || PRIMARY_800};
  color: ${(props) => props.color || WHITE};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderadius || '6.25rem'};
  padding: ${(props) => props.padding || '0 3rem'};
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || '3rem'};
  font-size: ${(props) => props.fontsize || '1rem'};
  font-weight: ${(props) => props.fontweight || '600'};
  text-align: ${(props) => props.textalign || 'center'};
  cursor: ${(props) => props.cursor || 'pointer'};
  outline: none;

  &:hover {
    background-color: ${(props) =>
      props.hoverbackgroundcolor || props.backgroundcolor || PRIMARY_900};
    color: ${(props) => props.hovercolor || props.color || WHITE};
    border: ${(props) => props.hoverborder || props.border || 'none'};
    border-radius: ${(props) =>
      props.hoverborderadius || props.borderadius || '6.25rem'};
    padding: ${(props) => props.hoverpadding || props.padding || '0 3rem'};
    margin: ${(props) => props.hovermargin || props.margin || '0'};
    width: ${(props) => props.hoverwidth || props.width || 'fit-content'};
    height: ${(props) => props.hoverheight || props.height || '3rem'};
    font-size: ${(props) => props.hoverfontsize || props.fontsize || '1rem'};
    font-weight: ${(props) =>
      props.hoverfontweight || props.fontweight || '600'};
    text-align: ${(props) =>
      props.hovertextalign || props.textalign || 'center'};
    cursor: ${(props) => props.hovercursor || props.cursor || 'pointer'};
    outline: none;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    filter: grayscale(1);
  }

  ${(props) =>
    props.boxshadow &&
    css`
      box-shadow: ${props.boxshadow};
    `}

  @media (max-width: 768px) {
    padding: ${(props) => props.mobilepadding || props.padding || '0 3rem'};
    height: ${(props) => props.mobileheight || props.height || '3rem'};
    font-size: ${(props) => props.mobilefontsize || props.fontsize || '1rem'};
    font-weight: ${(props) =>
      props.mobilefontweight || props.fontweight || '600'};

    &:hover {
      padding: ${(props) =>
        props.hovermobilepadding ||
        props.mobilepadding ||
        props.padding ||
        '0 3rem'};
    }
  }
`;

export const LargeButton = styled(SmallButton)`
  padding: ${(props) => props.padding || '0 4rem'};
  height: ${(props) => props.height || '4rem'};
  font-size: ${(props) => props.fontsize || '1.5rem'};
  font-weight: ${(props) => props.fontweight || '600'};

  &:hover {
    padding: ${(props) => props.hoverpadding || props.padding || '0 4rem'};
    height: ${(props) => props.hoverheight || props.height || '4rem'};
    font-size: ${(props) => props.hoverfontsize || props.fontsize || '1.5rem'};
    font-weight: ${(props) =>
      props.hoverfontweight || props.fontweight || '600'};
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    transform: scale(1.05);
  }
`;
