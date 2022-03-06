import React, { useState } from 'react';
import useSharedLoginMutation from 'src/utils/useSharedLoginMutation';
import { useResetPasswordMutation } from 'src/app/services/player';

export function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data: player, error, isLoading }] = useSharedLoginMutation();
  const [resetPassword, { data: resestPasswordResult, error: resetPasswordError, isLoading: resetPasswordIsLoading }] = useResetPasswordMutation();

  const submitLogin = () => {
    const usernameToSubmit = username || localStorage.getItem('splinterlands:username');
    const passwordToSubmit = password || localStorage.getItem('splinterlands:key');
    login({
      username: usernameToSubmit,
      key: passwordToSubmit,
    });
  };
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div style={{ color: 'orangered' }}>{error}</div>}
      <h2>Home</h2>
      {!player && (
        <>
          <div>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            Password/key:
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" onClick={submitLogin}>
            Login
          </button>
          {resetPasswordIsLoading ? (
            <div>...</div>
          ) : (
            <button type="button" onClick={() => resetPassword(username)}>
              Reset password
            </button>
          )}
          {resetPasswordError && <div style={{ color: 'orangered' }}>{resetPasswordError}</div>}
          {resestPasswordResult && resestPasswordResult.success && <div>Check your email for reset password email</div>}
        </>
      )}
      {player && (
        <h3>
          Hello {player.name} {player?.guild?.name ? `(${player?.guild?.name})` : ''}
        </h3>
      )}
    </div>
  );
}
