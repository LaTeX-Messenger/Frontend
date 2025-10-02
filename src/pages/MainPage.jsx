import "./MainPage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkSession } from "../api";

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    async function verify() {
      try {
        const data = await checkSession();
        if (data.authenticated) {
          navigate("/chat");
        } else {
          navigate("/login");
        }
      } catch (e) {
        console.error("세션 확인 에러:", e);
        navigate("/login");
      }
    }
    verify();
  }, [navigate]);

  return (
    <div className="main-page">
      <h1>LaTeX🔢</h1>
      <div className="spinner"></div>
    </div>
  );
}

export default MainPage;


