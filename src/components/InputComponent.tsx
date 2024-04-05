import React, { forwardRef } from "react";

interface InputComponentProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
}

const InputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputComponentProps
> = ({ value, onChange, onFocus }, ref) => {
  return (
    <input
      ref={ref}
      value={value}
      type="text"
      aria-autocomplete="list"
      aria-expanded="true"
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus}
    />
  );
};

const ForwardedInputComponent = forwardRef(InputComponent);
ForwardedInputComponent.displayName = 'InputComponent'; 

export default ForwardedInputComponent;