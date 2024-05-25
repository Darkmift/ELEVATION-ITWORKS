import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title, { TitleProps } from './Title';

const renderTitle = (props: TitleProps) => {
  const { container } = render(<Title {...props} />);
  const titleElement = container.querySelector('.title-component');
  return titleElement;
};

describe('Title', () => {
  it('Title default size correct', () => {
    const titleElement = renderTitle({ text: 'Default Title h1' });
    expect(titleElement?.tagName).toBe('H1');
  });

  it('Corect tags for all prop sizes', () => {
    const sizes = [1, 2, 3, 4, 5, 6] as const;
    sizes.forEach((size) => {
      const titleElement = renderTitle({ text: `Title h${size}`, size });
      expect(titleElement?.tagName).toBe(`H${size}`);
    });
  });

  it('prop className', () => {
    const titleElement = renderTitle({ text: 'Title h1', className: 'test-class' });
    expect(titleElement).toHaveClass('test-class');
  });

  it('prop text', () => {
    const titleElement = renderTitle({ text: 'Title h1' });
    expect(titleElement?.textContent).toBe('Title h1');
  });
});
