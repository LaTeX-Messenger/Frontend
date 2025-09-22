import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "") return;
    // 이름을 state로 넘겨주고 싶다면 navigate 시에 state 전달 가능
    navigate("/chat", { state: { username } });
  };

  return (
    <div className="login-page">
      <h1>LaTeX🔢</h1>
      <input
        type="text"
        placeholder="사용자 이름을 입력하세요"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default LoginPage;
