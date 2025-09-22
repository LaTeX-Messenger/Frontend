import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2초 후 사라짐
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <div className="splash-screen">
          <h1>LaTeX 🔢</h1>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;