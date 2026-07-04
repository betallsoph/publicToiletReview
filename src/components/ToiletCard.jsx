import React from 'react';
import { Star, Navigation, ShieldCheck, DollarSign, Accessibility } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ToiletCard({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel"
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(0, 0, 0, 0.5)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
      }}
    >
      <div style={{
        width: '100%',
        height: '180px',
        borderRadius: '8px',
        background: `url(${data.image}) center/cover no-repeat`,
        position: 'relative'
      }}>
        {data.isFree && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'var(--success)',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 700
          }}>
            MIỄN PHÍ
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{data.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--warning)', fontWeight: 600 }}>
            <Star fill="currentColor" size={16} />
            {data.rating}
          </div>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Navigation size={14} /> {data.distance} km cách bạn
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
        <div title="Độ sạch sẽ" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)', fontSize: '0.85rem' }}>
          <ShieldCheck size={16} color="var(--success)" /> {data.cleanliness}/5
        </div>
        {data.hasAccessible && (
          <div title="Hỗ trợ người khuyết tật" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-primary)', fontSize: '0.85rem' }}>
            <Accessibility size={16} color="var(--primary)" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
