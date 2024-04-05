import React from 'react';
import { AutocompleteItem } from '../App';

interface TagListComponentProps {
  tags: AutocompleteItem[];
  onRemove: (index: number) => void;
}

const TagListComponent: React.FC<TagListComponentProps> = ({ tags, onRemove }) => {
  return (
    <div>
      {tags.map((item, index) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default TagListComponent;
