// src/App.tsx
import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import MangaPage from "./components/MangaPage";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
      {isLoggedIn ? (
        <MangaPage />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default App;
