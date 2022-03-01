import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import useSharedLoginMutation from 'src/utils/useSharedLoginMutation';

export function Layout() {
  const [, player] = useSharedLoginMutation();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/market">Market</Link> | {player.data && <Link to="/private">Private</Link>}
      </nav>
      <h1>Splinterlands</h1>
      <Outlet />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
        }}
      >
        Footer
      </div>
    </div>
  );
}
