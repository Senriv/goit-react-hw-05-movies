import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Main } from './Layout.styled';

const Navigation = lazy(() => import('components/Navigation/Navigation'));

const Layout = () => {
  return (
    <>
      <Suspense>
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </>
  );
};
export default Layout;
