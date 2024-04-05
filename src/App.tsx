import { useMemo } from "react";
import "./App.css";
// import { useQuery } from "react-query";
import { useAutocompleteData } from "./hooks/useAutocompleteData";
import { calculateAmount } from "./utils/utils";
import { useAutocompleteQuery } from "./hooks/useAutocompleteQuery";
import InputComponent from "./components/InputComponent";
import TagListComponent from "./components/TagListComponent";
import DropdownComponent from "./components/DropdownComponent";
import ResultComponent from "./components/ResultComponent";
import { useLogic } from "./hooks/useLogic";

export type AutocompleteItem = {
  category: string;
  id: string;
  name: string;
  value: number;
};

function App() {
  const {
    inputValue,
    openDropdown,
    handleInputChange,
    handleContainerClick,
    handleItemClick,
    handleTagRemove,
    mainBoxRef,
    inputRef,
  } = useLogic();

  const { data: selectedTags } = useAutocompleteData();

  const { data, isLoading } = useAutocompleteQuery(inputValue);
  const amount = useMemo(() => calculateAmount(selectedTags), [selectedTags]);

  return (
    <div ref={mainBoxRef}>
      <div className="container">
        <div className="input_container" onClick={handleContainerClick}>
          <div className="value_inputs_wrapper">
            <TagListComponent tags={selectedTags} onRemove={handleTagRemove} />
            <InputComponent
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleContainerClick}
            />
          </div>
        </div>

        <DropdownComponent
          data={data}
          isLoading={isLoading}
          onItemClick={handleItemClick}
          openDropdown={openDropdown}
        />
      </div>
      <ResultComponent amount={amount} />
    </div>
  );
}

export default App;
