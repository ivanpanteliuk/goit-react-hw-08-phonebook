import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export default function SharedLayout() {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
