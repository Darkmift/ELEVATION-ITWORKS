import React from 'react';

// Extend ButtonProps to include all standard button HTML attributes
type ButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * A custom button
 * @param props {ButtonProps} - Properties include the text of the button and any other button HTML attributes
 */
function UiButton({ text, onClick = () => {}, ...rest }: ButtonProps) {
  return (
    <button onClick={onClick} {...rest}>
      {text}
    </button>
  );
}

export default UiButton;
