import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const [userId, setUserId] = useState(null); // ✅ 전역 userId 상태

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage setUserId={setUserId} />} />
        <Route path="/login" element={<LoginPage setUserId={setUserId} />} />
        <Route path="/chat" element={<ChatPage userId={userId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


