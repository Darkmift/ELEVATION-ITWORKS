import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import '@testing-library/jest-dom';

describe('Layout Component', () => {
  it('renders the Title component with the correct props', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const title = screen.getByText('Builds dashbort')
    expect(title).toBeInTheDocument();
    expect(title).toBeInstanceOf(HTMLHeadingElement);
    expect(title.tagName).toBe('H1');
  });

  it('renders the Outlet component', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="child" element={<div>Child Component</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText('Child Component')).not.toBeInTheDocument();

    render(
      <MemoryRouter initialEntries={['/child']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="child" element={<div>Child Component</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});