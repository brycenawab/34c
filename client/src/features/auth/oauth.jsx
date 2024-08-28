import React, { useState, useEffect } from 'react';

function Button() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {

    async function fetchAccessToken() {
      try {
        const response = await fetch('/login');
        const data = await response.json();
        setAccessToken(data.accessToken);
        console.log('Access token received:', data.accessToken);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    }
    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    }
  }, [accessToken]);

  return (
    <button id="login-button">
      Login via Github
    </button>
  );
}

export default Button