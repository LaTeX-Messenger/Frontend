import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import "./LoginPage.css";

function LoginPage({setUserId}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) return;

    const res = await login(username, password);

    if (res.success) {   // 서버 응답에 맞게 조건 수정 필요
      setUserId(res.userId);
      navigate("/chat");
    } else {
      alert("로그인 실패: " + res.message);
    }
  };

  return (
    <div className="login-page">
      <h1>LaTeX🔢</h1>
      <input
        type="text"
        placeholder="아이디를 입력하세요"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default LoginPage;
