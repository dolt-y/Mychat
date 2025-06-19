import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
export default function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem('chatUser', name);
      navigate('/rooms');
    }
  };

  return (
    <div className="login-page">
      <h2>欢迎进入聊天室</h2>
      <input
        placeholder="请输入昵称"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleLogin}>进入</button>
    </div>
  );
}