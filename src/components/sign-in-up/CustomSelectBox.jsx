import { PRIMARY_400, PRIMARY_800, WHITE_200 } from "@constants/colors";
import Select from "react-select";
import styled from "styled-components";

const CustomSelect = styled(Select)`
  width: 100%;

  .select__control {
    border-color: ${WHITE_200};
    box-shadow: none;
    border-radius: 0.5rem;
    min-height: unset;
    height: auto;
    padding: 0.5rem 1rem;
    &:hover {
      border-color: ${WHITE_200};
    }

    @media (max-width: 768px) {
      padding: 0.3rem 0.5rem;
    }
  }

  .select__single-value {
    font-weight: bold;
  }

  .select__value-container {
    padding: 0;
    margin: 0;

    font-size: 1.125rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .select__value-container * {
    margin: 0;
    padding: 0;
  }

  .select__indicator-separator {
    padding: 0;
    margin: 0;
  }

  .select__indicator {
    padding: 0;
    margin: 0;
    width: 2.25rem;
    align-items: center;

    :first-of-type {
      justify-content: flex-start;
    }

    :last-of-type {
      justify-content: flex-end;
    }

    @media (max-width: 768px) {
      width: 1.5rem;
    }
  }

  .select__control--is-focused,
  .select__control--is-focused:hover {
    border-color: ${WHITE_200};
    box-shadow: none;
  }

  .select__menu {
    border-radius: 0.5rem;
    box-shadow: none;
    border: 0.0625rem solid ${WHITE_200};
    width: calc(100% - 4.5rem);
  }

  .select__option {
    cursor: pointer;
  }

  .select__option--is-focused {
    background-color: ${PRIMARY_400};
  }

  .select__option--is-selected {
    background-color: ${PRIMARY_800};
  }
`;

const CustomSelectBox = ({ options, onChange }) => {
  return (
    <CustomSelect
      classNamePrefix="select"
      isClearable={false}
      isSearchable={true}
      options={options}
      placeholder="Select your organization"
      onChange={onChange}
    />
  );
};

export default CustomSelectBox;
