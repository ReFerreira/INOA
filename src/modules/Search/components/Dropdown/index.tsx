import React from "react";
import searchOptions from "../../../../assets/b3_SYMBOLS.json";

import { DropdownContainer, DropdownRow } from "./styles";

interface DropdownProps {
  value: string;
  onSearch: (ticker: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onSearch }) => {
  return (
    <DropdownContainer>
      {searchOptions
        .filter((option) => {
          const searchTerm = value.toLowerCase().trim();

          if (!searchTerm) {
            return false;
          }

          const ticker = option.Ticker.toLowerCase();
          const name = option.Nome.toLowerCase();

          return (
            (ticker.includes(searchTerm) || name.includes(searchTerm)) &&
            ticker !== searchTerm
          );
        })
        .slice(0, 10)
        .map((option) => (
          <DropdownRow
            onClick={() => onSearch(option.Ticker)}
            key={option.Ticker}
          >
            {option.Ticker} - {option.Nome}
          </DropdownRow>
        ))}
    </DropdownContainer>
  );
};

export default Dropdown;
