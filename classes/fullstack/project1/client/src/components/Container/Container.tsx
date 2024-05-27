import { FC, ReactNode } from 'react';
import './Container.css'
export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({children, className =''}) => {
  return <section className={`container ${className}`}>{children}</section>;
};

export default Container;
