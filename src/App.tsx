import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useSharedLoginMutation from 'src/utils/useSharedLoginMutation';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { Market } from './pages/Market';
import { Layout } from './pages/Layout';

export function App() {
  const [, player] = useSharedLoginMutation();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        {player.data && <Route path="/private" element={<Private />} />}
        <Route path="/market" element={<Market />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
