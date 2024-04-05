import React from 'react';
import { AutocompleteItem } from '../App';

interface TagListComponentProps {
  tags: AutocompleteItem[];
  onRemove: (index: number) => void;
}

const TagListComponent: React.FC<TagListComponentProps> = ({ tags, onRemove }) => {
  return (
    <div className="tag-list-container">
    {tags.map((item: AutocompleteItem, index: number) => (
      <div className="tag-item" key={item.id}>
        {item.name}
        <button onClick={() => onRemove(index)}>x</button>
      </div>
    ))}
  </div>
  );
};

export default TagListComponent;
