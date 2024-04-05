import React from 'react';
import { AutocompleteItem } from "../App";

interface DropdownComponentProps {
  data: AutocompleteItem[];
  isLoading: boolean;
  onItemClick: (item: AutocompleteItem) => void;
  openDropdown: boolean; // Add openDropdown prop
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ data, isLoading, onItemClick, openDropdown }) => {
  return (
    <div className={`dropdown_container ${openDropdown ? 'display' : 'display_none'}`}>
        {isLoading && <div>Loading...</div>}
      <ul>
        {data?.map((item: AutocompleteItem) => (
          <li key={item?.id} onClick={() => onItemClick(item)}>
            {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownComponent;
