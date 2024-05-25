import { FC } from 'react';

export type TitleProps = {
  text: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const Title: FC<TitleProps> = ({ text, size = 1, className = '' }) => {
  const TitleTag = `h${size}` as keyof JSX.IntrinsicElements;
  return <TitleTag className={`title-component ${className}`}>{text}</TitleTag>;
};

export default Title;
