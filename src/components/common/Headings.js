import styled, { css } from "styled-components";
import { ACCENT_800 } from "@constants/colors";

export const Display = styled.h1`
  ${(props) =>
    css`
      font-size: 2.44rem;
      line-height: 3.75rem;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1.56rem;
        line-height: 2rem;
      }
    `}
`;

export const SecondaryDisplay = styled.h2`
  ${(props) =>
    css`
      font-size: 2.44rem;
      line-height: 3.75rem;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      white-space: pre-wrap;
      @media only screen and (max-width: 768px) {
        font-size: 1.56rem;
        line-height: 2rem;
      }
    `}
`;

export const H1 = styled.h1`
  ${(props) =>
    css`
      font-size: 1.95rem;
      line-height: 2.5rem;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    `}
`;

export const H2 = styled.h2`
  ${(props) =>
    css`
      font-size: 1.56rem;
      line-height: 2rem;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    `}
`;

export const H3 = styled.h3`
  ${(props) =>
    css`
      font-size: 1.25rem;
      line-height: 1.75rem;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      @media only screen and (max-width: 395px) {
        font-size: 0.8rem;
        line-height: 1;
      }
    `}
`;

export const H4 = styled.h4`
  ${(props) =>
    css`
      font-size: 1rem;
      line-height: ${props.lineHeight || "1.5rem"};
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 1.25rem;
      }
    `}
`;

export const H5 = styled.h5`
  ${(props) =>
    css`
      font-size: 0.8rem;
      line-height: 1.25rem;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      letter-spacing: ${props.spacing || "unset"};
    `}
`;

export const H6 = styled.h6`
  ${(props) =>
    css`
      font-size: 0.64rem;
      line-height: 1rem;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      letter-spacing: ${props.spacing || "unset"};
    `}
`;

export const P = styled.p`
  ${(props) =>
    css`
      font-size: ${props.fontSize || "1rem"};
      line-height: ${props.lineHeight || "1.5rem"};
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};

      @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 1.25rem;
      }
    `}
`;
