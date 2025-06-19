import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './index.css';
const mockUsers = [
  { id: 1, name: '小明', avatar: '😃' },
  { id: 2, name: '小红', avatar: '😊' },
  { id: 3, name: '小刚', avatar: '😎' },
];

export default function ChatRoom() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([
    { id: 1, user: '小明', text: '大家好！' },
    { id: 2, user: '小红', text: '你好呀！' },
  ]);
  const [input, setInput] = useState('');
  const [currentUser] = useState(localStorage.getItem('chatUser') || '游客');
  const endRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, user: currentUser, text: input },
      ]);
      setInput('');
    }
  };

  return (
    <div className="chat-room">
      <aside className="user-list">
        <h3>在线用户</h3>
        <ul>
          {mockUsers.map(user => (
            <li key={user.id}>
              <span className="user-avatar">{user.avatar}</span>
              {user.name}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/rooms')}>返回房间列表</button>
        <Link to="/profile">个人信息</Link>
      </aside>
      <main className="chat-main">
        <header>
          <h2>房间ID: {roomId}</h2>
        </header>
        <section className="chat-messages">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`chat-message ${msg.user === currentUser ? 'self' : ''}`}
            >
              <span className="chat-user">{msg.user}：</span>
              <span className="chat-text">{msg.text}</span>
            </div>
          ))}
          <div ref={endRef} />
        </section>
        <footer className="chat-input">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="输入消息，回车发送"
          />
          <button onClick={handleSend}>发送</button>
        </footer>
      </main>
    </div>
  );
}