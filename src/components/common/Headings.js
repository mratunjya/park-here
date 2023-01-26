import styled, { css } from "styled-components";
import { ACCENT_800 } from "@constants/colors";

export const Display = styled.h1`
  ${(props) =>
    css`
      font-size: 2.44rem;
      line-height: 60px;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1.56rem;
        line-height: 32px;
      }
    `}
`;

export const SecondaryDisplay = styled.h2`
  ${(props) =>
    css`
      font-size: 2.44rem;
      line-height: 60px;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      white-space: pre-wrap;
      @media only screen and (max-width: 768px) {
        font-size: 1.56rem;
        line-height: 32px;
      }
    `}
`;

export const H1 = styled.h1`
  ${(props) =>
    css`
      font-size: 1.95rem;
      line-height: 40px;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 28px;
      }
    `}
`;

export const H2 = styled.h2`
  ${(props) =>
    css`
      font-size: 1.56rem;
      line-height: 32px;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 28px;
      }
    `}
`;

export const H3 = styled.h3`
  ${(props) =>
    css`
      font-size: 1.25rem;
      line-height: 28px;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 24px;
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
      line-height: ${props.lineHeight || "24px"};
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 20px;
      }
    `}
`;

export const H5 = styled.h5`
  ${(props) =>
    css`
      font-size: 0.8rem;
      line-height: 20px;
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
      line-height: 16px;
      opacity: ${props.opacity || 1};
      font-weight: ${props.bold ? 700 : 500};
      color: ${props.color || ACCENT_800};
      text-align: ${props.textAlign || "left"};
      margin: ${props.margin || 0};
      padding: ${props.padding || 0};
      letter-spacing: ${props.spacing || "unset"};
    `}
`;
