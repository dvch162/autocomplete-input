import { useState, useEffect, useRef } from 'react';
import { symbols } from '../utils/utils';
import { useAutocompleteData } from '../hooks/useAutocompleteData';
import { AutocompleteItem } from '../App';

export const useLogic = () => {
    const { setItem, removeItem } = useAutocompleteData();
    const inputRef = useRef<HTMLInputElement>(null);
    const mainBoxRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);


  const handleInputChange = (value: string) => {
    if (symbols.includes(value)) {
      setOpenDropdown(false);
      const newItem: AutocompleteItem = {
        category: 'symbol',
        id: value,
        name: value,
        value: 0,
      };
      setItem(newItem);
    } else {
      setOpenDropdown(true);
      setInputValue(value);
    }
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleItemClick = (item: AutocompleteItem) => {
    setItem(item);
    setOpenDropdown(false);
    setInputValue('');
  };

  const handleTagRemove = (index: number) => {
    removeItem(index);
  };


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mainBoxRef.current && !mainBoxRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return {
    inputValue,
    setInputValue,
    openDropdown,
    setOpenDropdown,
    handleInputChange,
    handleContainerClick,
    handleItemClick,
    handleTagRemove,
    mainBoxRef,
    inputRef
  };
};
