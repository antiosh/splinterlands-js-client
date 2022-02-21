import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoginMutation } from 'src/app/services/player';

export function PrivateOutlet() {
  console.log(useLoginMutation); // eslint-disable-line
  const [, player] = useLoginMutation();
  return player?.data?.jwt_token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateOutlet;
