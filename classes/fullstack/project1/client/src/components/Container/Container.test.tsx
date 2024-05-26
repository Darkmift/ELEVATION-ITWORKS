import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container, { ContainerProps } from './Container';

const renderContainer = (props: ContainerProps) => {
  const { container } = render(<Container {...props} />);
  return container.firstChild;
};

describe('Container', () => {
  it('applies default className correctly', () => {
    const containerElement = renderContainer({ children: 'Test Content' });
    expect(containerElement).toHaveClass('container');
  });

  it('applies additional className correctly', () => {
    const containerElement = renderContainer({ children: 'Test Content', className: 'test-class' });
    expect(containerElement).toHaveClass('container');
    expect(containerElement).toHaveClass('test-class');
  });

  it('renders a div element as a child correctly', () => {
    const { getByTestId } = render(
      <Container>
        <div data-testid="child-div">Child Div Content</div>
      </Container>
    );
    const childDiv = getByTestId('child-div');
    expect(childDiv).toBeInTheDocument();
    expect(childDiv).toHaveTextContent('Child Div Content');
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Container>Test Content</Container>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
