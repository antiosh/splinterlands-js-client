import React, { useState } from 'react';
import useSharedLoginMutation from 'src/utils/useSharedLoginMutation';

export function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data: player, error, isLoading }] = useSharedLoginMutation();

  const submitLogin = () => {
    const usernameToSubmit = username || localStorage.getItem('splinterlands:username');
    const passwordToSubmit = username || localStorage.getItem('splinterlands:key');
    login({
      username: usernameToSubmit,
      key: passwordToSubmit,
    });
  };
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div style={{ color: 'orangered' }}>An error has occured</div>}
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
