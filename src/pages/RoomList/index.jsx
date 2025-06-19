import { Link } from 'react-router-dom';
import './index.css';
const rooms = [
  { id: '1', name: '前端技术' },
  { id: '2', name: '生活闲聊' },
  { id: '3', name: '学习打卡' },
];

export default function RoomList() {
  return (
    <div className="room-list">
      <h2>聊天室列表</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <Link to={`/chat/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/profile" className="profile-link">个人信息</Link>
    </div>
  );
}