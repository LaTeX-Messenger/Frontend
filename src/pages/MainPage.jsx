import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 세션 확인 로직은 지금은 사용 안 함
    const timer = setTimeout(() => {
      navigate("/login");   // 2초 후 무조건 로그인 페이지로 이동
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <h1>LaTeX 🔢</h1>
      <p>Loading...</p>
    </div>
  );
}

export default MainPage;

