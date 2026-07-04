import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{
      padding: '6rem 1rem 4rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={{
          background: 'rgba(59, 130, 246, 0.2)',
          color: 'var(--primary)',
          padding: '0.25rem 1rem',
          borderRadius: '99px',
          fontSize: '0.875rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Dịch vụ công cộng miễn phí
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontSize: '4rem',
          maxWidth: '800px',
          background: 'linear-gradient(to right, #fff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.1
        }}
      >
        Tìm chốn bình yên <br/> khi bạn cần nhất
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px'
        }}
      >
        Khám phá, đánh giá và chia sẻ trải nghiệm về các nhà vệ sinh công cộng quanh bạn. Sạch sẽ, an toàn và tiện lợi.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}
      >
        <button style={{
          background: 'var(--primary)',
          color: '#fff',
          padding: '1rem 2rem',
          borderRadius: '99px',
          border: 'none',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.39)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Tìm gần đây
        </button>
        <button style={{
          background: 'rgba(255,255,255,0.1)',
          color: '#fff',
          padding: '1rem 2rem',
          borderRadius: '99px',
          border: '1px solid var(--glass-border)',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background 0.2s ease'
        }}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          Thêm địa điểm
        </button>
      </motion.div>
    </section>
  );
}
