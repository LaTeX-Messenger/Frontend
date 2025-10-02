import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ChatPage.css";
import Message from "../components/Message";
import myProfile from "../assets/profile.png";
import { loadChat, sendChat } from "../api";

function ChatPage({userId}) {
  const location = useLocation();
  const username = location.state?.username || "나";
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

    // 처음 들어오면 채팅 기록 불러오기
    useEffect(() => {
    async function fetchMessages() {
      const data = await loadChat();
      setMessages(data);
    }
    fetchMessages();
  }, []);

    const handleSend = async () => {
      //console.log("fuck you");
    if (!input.trim()) return;

    const newMsg = await sendChat(userId, input);
    setMessages(prev=>[...prev, newMsg]);
    setInput("");
  };

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
            <Message key={i} sender={msg.userId} text={msg.content} />
        ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()} // 엔터 전송
          />
          <button onClick={handleSend}>전송</button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
