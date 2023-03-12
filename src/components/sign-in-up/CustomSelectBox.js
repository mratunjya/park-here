import { PRIMARY_400, PRIMARY_900, WHITE_200 } from "@constants/colors";
import Select from "react-select";
import styled from "styled-components";

const CustomSelect = styled(Select)`
  width: 100%;

  .select__control {
    border-color: ${WHITE_200};
    box-shadow: none;
    border-radius: 0.5rem;
    &:hover {
      border-color: ${WHITE_200};
    }
  }

  .select__single-value {
    font-weight: bold;
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
    background-color: ${PRIMARY_900};
  }
`;

const CustomSelectBox = ({ options }) => {
  return (
    <CustomSelect
      classNamePrefix="select"
      isClearable={true}
      isSearchable={true}
      options={options}
      placeholder="Select your organization"
    />
  );
};

export default CustomSelectBox;
