import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
export default function Profile() {
  const [name, setName] = useState(localStorage.getItem('chatUser') || '');
  const navigate = useNavigate();

  const handleSave = () => {
    localStorage.setItem('chatUser', name);
    alert('保存成功');
    navigate('/rooms');
  };

  return (
    <div className="profile-page">
      <h2>个人信息</h2>
      <label>
        昵称：
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <button onClick={handleSave}>保存</button>
      <button onClick={() => navigate('/rooms')}>返回</button>
    </div>
  );
}