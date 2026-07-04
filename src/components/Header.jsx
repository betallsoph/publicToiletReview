import React from 'react';
import { Search, MapPin, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: '1rem',
      zIndex: 100,
      padding: '1rem 2rem',
      margin: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: 'inherit' }}>
        <MapPin color="var(--primary)" />
        <span>RestFinder</span>
      </a>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.05)',
        padding: '0.5rem 1rem',
        borderRadius: '99px',
        gap: '0.5rem',
        border: '1px solid var(--glass-border)'
      }}>
        <Search size={18} color="var(--text-secondary)" />
        <input 
          type="text" 
          placeholder="Tìm nhà vệ sinh gần đây..." 
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'var(--text-primary)',
            width: '200px'
          }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="/about" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
           onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
           onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
          Về chúng tôi
        </a>
        <a href="/login" style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}>
          <User />
        </a>
        <button style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }}>
          <Menu />
        </button>
      </div>
    </header>
  );
}
