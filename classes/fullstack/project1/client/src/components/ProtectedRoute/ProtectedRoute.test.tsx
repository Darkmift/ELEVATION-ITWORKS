import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import ProtectedRoute from './ProtectedRoute';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../store/slices/auth.slice';
import { ReactNode } from 'react';
import { Role } from '../../types';

jest.mock('../../store/hooks');

const mockedUseAppSelector = useAppSelector as jest.MockedFunction<typeof useAppSelector>;

const renderWithProviders = (ui: ReactNode, { store } = { store: configureStore({ reducer: { authReducer } }) }) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};

describe('ProtectedRoute', () => {
  it('should redirect to the redirectPath if no admin username', () => {
    mockedUseAppSelector.mockReturnValue({ admin: { username: '', firstName: '', lastName: '', role: null } });

    const { container } = renderWithProviders(
      <Routes>
        <Route path="/" element={<ProtectedRoute redirectPath="/login" />} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    );

    expect(container.innerHTML).toMatch('Login Page');
  });

  it('should render the Outlet if admin username is present', () => {
    mockedUseAppSelector.mockReturnValue({ admin: { username: 'admin', firstName: 'admin', lastName: 'admin', role: Role.ONE } });

    const { container } = renderWithProviders(
      <Routes>
        <Route path="/" element={<ProtectedRoute redirectPath="/login" />} >
          <Route path="" element={<div>Protected Content</div>} />
        </Route>
      </Routes>
    );

    expect(container.innerHTML).toMatch('Protected Content');
  });
});