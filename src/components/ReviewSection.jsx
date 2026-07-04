import React, { useState } from 'react';
import { Star, Send, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReviewSection({ reviews }) {
  const [newReview, setNewReview] = useState('');
  
  return (
    <div style={{ marginTop: '3rem' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Star color="var(--warning)" fill="currentColor" />
        Đánh giá ({reviews.length})
      </h3>
      
      {/* Review Input */}
      <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3, 4, 5].map(star => (
            <Star key={star} size={24} color="var(--text-secondary)" style={{ cursor: 'pointer', transition: 'color 0.2s' }} 
                  onMouseOver={e => e.currentTarget.style.color = 'var(--warning)'}
                  onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="Chia sẻ trải nghiệm của bạn..." 
            value={newReview}
            onChange={e => setNewReview(e.target.value)}
            style={{
              flex: 1,
              background: 'rgba(0,0,0,0.2)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              padding: '1rem',
              color: 'var(--text-primary)',
              outline: 'none'
            }}
          />
          <button style={{
            background: 'var(--primary)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '0 1.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 600
          }}>
            Gửi <Send size={16} />
          </button>
        </div>
      </div>

      {/* Review List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel"
            style={{ padding: '1.5rem', display: 'flex', gap: '1rem' }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User size={20} color="var(--text-secondary)" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600 }}>{review.user}</span>
                <div style={{ display: 'flex', gap: '2px', color: 'var(--warning)' }}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{review.date}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{review.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
