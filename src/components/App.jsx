import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const LogIn = lazy(() => import('../pages/LogIn/LogIn'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="signup"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '300px',
            }}
          >
            <p style={{ fontSize: '100px', color: '#fff' }}>Page not found</p>
          </div>
        }
      />
    </Routes>
  );
}
