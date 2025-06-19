import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import ChatRoom from '../pages/ChatRoom';
import Profile from '../pages/profile';
import RoomList from '../pages/RoomList';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rooms" element={<RoomList />} />
      <Route path="/chat/:roomId" element={<ChatRoom />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}