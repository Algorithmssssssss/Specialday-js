import React, { useState } from "react";
import { useEffect } from "react";

const SpotifyLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const clientId = "3f792e4fc018433bb891aa42fccc73b9";
    const redirectUri = "http://localhost:5173/wishes/";
    const scopes = "streaming user-read-email user-read-private";

    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=code`;

    if (!isLoggedIn) {
      window.location = authorizeUrl;
    } else {
      // fetch user data from Spotify API
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? <p>Welcome, {userData.display_name}</p> : <p>Logging in...</p>}
    </div>
  );
};

export default SpotifyLogin;