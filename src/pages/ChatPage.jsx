import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ChatPage.css";
import Message from "../components/Message";
import myProfile from "../assets/profile.png";

function ChatPage() {
  const location = useLocation();
  const username = location.state?.username || "나";
  const [messages, setMessages] = useState([
    { sender: "김태현", text: "그리스 문자들: $$α + β = γ$$ 그리고 $$π ≈ 3.14$$" },
    { sender: "정유진", text: "간단한 합계: $1+2+3=6$ 그리고 지수: $2^3=8$" },
    { sender: "나", text: "안녕하세요" },
  ]);
  const [input, setInput] = useState("");

    const sendMessage = () => {
    if (input.trim() === "") return;
    // 여기서는 sender를 "나"로 고정
    setMessages([...messages, { sender: "나", text: input }]);
    setInput("");
  };
  /*const [ws, setWs] = useState(null);

    useEffect(() => {
    // WebSocket 연결
    const socket = new WebSocket("ws://localhost:3000"); // 팀원이 만든 서버 주소로 바꾸기
    setWs(socket);

    socket.onopen = () => {
      console.log("✅ WebSocket 연결됨");
    };

    socket.onmessage = (event) => {
      // 서버에서 받은 메시지를 추가
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onclose = () => {
      console.log("❌ WebSocket 연결 끊김");
    };

    return () => socket.close(); // 컴포넌트 종료 시 연결 닫기
  }, []);

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(input);
      setInput("");
    }
  };*/

  return (
    <div className="app">
      {/* 왼쪽 사이드바 */}
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="profile">
            <img src={myProfile} alt="profile" className="profile-img" />
            <span className="username">{username}</span>
          </div>
          <button className="settings-btn">⚙️</button>
        </div>

        <div className="channels">
          <h3>채널</h3>
          <ul>
            <li># 일반</li>
            <li># 수학</li>
            <li># 공지사항</li>
          </ul>
        </div>

              {/* DM 목록 */}
        <div className="dms">
          <h3>DM</h3>
          <ul>
            <li><span className="status-dot online"></span> 김교수</li>
            <li><span className="status-dot online"></span> 지수</li>
            <li><span className="status-dot"></span> 민호</li>
            <li><span className="status-dot"></span> 서연</li>
            <li><span className="status-dot online"></span> 현우</li>
          </ul>
        </div>
      </div>

      {/* 오른쪽 채팅창 */}
      <div className="chat">
        <div className="chat-header"># 일반</div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <Message key={i} sender={msg.sender} text={msg.text} />
        ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()} // 엔터 전송
          />
          <button onClick={sendMessage}>전송</button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
