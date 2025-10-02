// src/api.js
const API_URL = import.meta.env.VITE_API_BASE_URL;

// 세션 확인
export async function checkSession() {
  const res = await fetch(`${API_URL}/session`, {
    method: "GET",
    credentials: "include"
  });
  return res.json();
}

// 로그인
export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

// 채팅 불러오기
export async function loadChat() {
  const res = await fetch(`${API_URL}/chat`, {
    method: "GET",
    credentials: "include"
  });
  return res.json();
}

// 채팅 보내기
export async function sendChat(userId, content) {
  const res = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ userId, content })
  });
  return res.json();
}
