// src/components/atoms/TextEditable/index.tsx
import { StyledEditable } from './styles';
import { ForwardedRef, forwardRef } from 'react';

interface TextEditableProps {
  children?: React.ReactNode;
  className?: string;
}

const TextEditable = forwardRef(function TextEditable(
  { children, className }: TextEditableProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <StyledEditable
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className={className}
    >
      {children}
    </StyledEditable>
  );
});

export default TextEditable;