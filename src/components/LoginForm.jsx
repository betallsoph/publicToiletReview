import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Github } from 'lucide-react';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)', padding: '2rem 1rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel"
        style={{ width: '100%', maxWidth: '400px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {isLogin ? 'Chào mừng bạn quay trở lại với RestFinder' : 'Tạo tài khoản để đóng góp địa điểm mới'}
          </p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {!isLogin && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Tên hiển thị</label>
              <input type="text" placeholder="Nguyễn Văn A" style={inputStyle} />
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="var(--text-secondary)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="email" placeholder="email@example.com" style={{ ...inputStyle, paddingLeft: '3rem' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mật khẩu</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="var(--text-secondary)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="password" placeholder="••••••••" style={{ ...inputStyle, paddingLeft: '3rem' }} />
            </div>
          </div>

          <button type="button" style={{
            background: 'var(--primary)',
            color: '#fff',
            border: 'none',
            padding: '1rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'background 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.background = 'var(--primary-hover)'}
          onMouseOut={e => e.currentTarget.style.background = 'var(--primary)'}
          onClick={() => window.location.href = '/'}
          >
            {isLogin ? 'Đăng Nhập' : 'Tạo Tài Khoản'}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
          <div style={{ height: '1px', background: 'var(--glass-border)', flex: 1 }}></div>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hoặc</span>
          <div style={{ height: '1px', background: 'var(--glass-border)', flex: 1 }}></div>
        </div>

        <button style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid var(--glass-border)',
          padding: '0.75rem',
          borderRadius: '8px',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          cursor: 'pointer'
        }}>
          <Github size={20} /> Tiếp tục với GitHub
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
          {isLogin ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
          <span 
            style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
          </span>
        </p>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: 'rgba(0,0,0,0.2)',
  border: '1px solid var(--glass-border)',
  borderRadius: '8px',
  padding: '1rem',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s'
};
