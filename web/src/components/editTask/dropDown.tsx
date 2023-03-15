import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
} from "./styledComponent";
import { iColumn } from "../../interfaces/column";

interface Props {
  value: number;
  onSelect: (o: number) => void;
  options: iColumn[];
}

const CustomDropdown = ({ options, value, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: number) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownHeader isOpen={isOpen} onClick={toggleDropdown}>
        <span>{options.find((o) => o.id === value)?.name}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </DropdownHeader>
      <DropdownContainer>
        {isOpen && (
          <DropdownList>
            {options.map((option: iColumn) => (
              <DropdownItem
                key={option.id}
                onClick={() => handleSelect(option.id)}
              >
                {option.name}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </DropdownWrapper>
  );
};

export default CustomDropdown;
