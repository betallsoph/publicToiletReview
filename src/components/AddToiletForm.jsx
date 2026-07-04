import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle, ShieldCheck } from 'lucide-react';

export default function AddToiletForm() {
  const [cleanliness, setCleanliness] = useState(0);
  const [isFree, setIsFree] = useState(true);
  const [isAccessible, setIsAccessible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '400px' }}>
          <CheckCircle size={64} color="var(--success)" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ marginBottom: '1rem' }}>Cảm ơn bạn!</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Địa điểm mới đã được gửi và đang chờ kiểm duyệt từ cộng đồng.</p>
          <a href="/" style={{ display: 'inline-block', background: 'var(--primary)', color: '#fff', padding: '0.75rem 2rem', borderRadius: '8px', fontWeight: 600 }}>Về Trang Chủ</a>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Thêm Nhà Vệ Sinh Mới</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Giúp cộng đồng tìm được những không gian thoải mái nhất quanh họ.</p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 500 }}>Tên địa điểm</label>
              <input type="text" placeholder="VD: Nhà vệ sinh Công viên..." style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.95rem', fontWeight: 500 }}>Địa chỉ chi tiết</label>
              <input type="text" placeholder="Đường, Phường, Quận, Thành phố..." style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.95rem', fontWeight: 500 }}>Hình ảnh</label>
            <div style={{
              border: '2px dashed var(--glass-border)',
              borderRadius: '12px',
              padding: '3rem 2rem',
              textAlign: 'center',
              cursor: 'pointer',
              background: 'rgba(0,0,0,0.1)',
              transition: 'background 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(0,0,0,0.2)'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
            >
              <UploadCloud size={40} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Kéo thả hoặc nhấn để tải ảnh lên</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Hỗ trợ JPG, PNG (Tối đa 5MB)</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.95rem', fontWeight: 500 }}>Đánh giá độ sạch sẽ ban đầu</label>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <ShieldCheck 
                  key={star} 
                  size={32} 
                  color={star <= cleanliness ? 'var(--success)' : 'var(--text-secondary)'} 
                  style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                  onClick={() => setCleanliness(star)}
                />
              ))}
              <span style={{ marginLeft: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                {cleanliness > 0 ? `${cleanliness}/5 điểm` : 'Chưa đánh giá'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={isFree} onChange={() => setIsFree(!isFree)} style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
              <span style={{ fontWeight: 500 }}>Miễn phí sử dụng</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={isAccessible} onChange={() => setIsAccessible(!isAccessible)} style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
              <span style={{ fontWeight: 500 }}>Hỗ trợ người khuyết tật</span>
            </label>
          </div>

          <button 
            type="button" 
            onClick={() => setSubmitted(true)}
            style={{
              background: 'var(--primary)',
              color: '#fff',
              border: 'none',
              padding: '1.25rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Đóng góp địa điểm này
          </button>
        </form>
      </div>
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
