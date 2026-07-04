import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section style={{
      padding: '8rem 1rem 4rem',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{
          fontSize: '4.5rem',
          background: 'linear-gradient(to right, var(--primary), #fff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.2
        }}>
          Sứ mệnh của chúng tôi
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '700px',
          margin: '1.5rem auto 0',
          lineHeight: 1.8
        }}>
          Chúng tôi tin rằng việc tiếp cận không gian vệ sinh sạch sẽ, an toàn là một quyền cơ bản. 
          RestFinder ra đời để kết nối cộng đồng, chia sẻ những địa điểm đáng tin cậy và nâng cao chất lượng tiện ích công cộng.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel"
        style={{
          display: 'flex',
          gap: '3rem',
          padding: '2rem 4rem',
          marginTop: '2rem'
        }}
      >
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)' }}>10k+</div>
          <div style={{ color: 'var(--text-secondary)' }}>Địa điểm</div>
        </div>
        <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)' }}>50k+</div>
          <div style={{ color: 'var(--text-secondary)' }}>Đánh giá</div>
        </div>
        <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-primary)' }}>99%</div>
          <div style={{ color: 'var(--text-secondary)' }}>Hài lòng</div>
        </div>
      </motion.div>
    </section>
  );
}
