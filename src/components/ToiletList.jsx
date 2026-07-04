import React from 'react';
import ToiletCard from './ToiletCard.jsx';

const mockData = [
  {
    id: 1,
    name: 'Nhà vệ sinh Công viên Tao Đàn',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
    distance: 0.8,
    cleanliness: 4,
    isFree: true,
    hasAccessible: true
  },
  {
    id: 2,
    name: 'WC Phố đi bộ Nguyễn Huệ',
    image: 'https://images.unsplash.com/photo-1563212001-9252062547b7?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    distance: 1.2,
    cleanliness: 5,
    isFree: false,
    hasAccessible: true
  },
  {
    id: 3,
    name: 'Trạm xăng Petrolimex Q3',
    image: 'https://images.unsplash.com/photo-1564500913959-1e35d1056555?auto=format&fit=crop&q=80&w=400',
    rating: 3.5,
    distance: 2.1,
    cleanliness: 3,
    isFree: true,
    hasAccessible: false
  },
  {
    id: 4,
    name: 'Nhà vệ sinh Takashimaya',
    image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?auto=format&fit=crop&q=80&w=400',
    rating: 5.0,
    distance: 1.5,
    cleanliness: 5,
    isFree: true,
    hasAccessible: true
  }
];

export default function ToiletList() {
  return (
    <section className="container" style={{ paddingBottom: '4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Địa điểm nổi bật</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['Gần nhất', 'Đánh giá cao', 'Miễn phí'].map((filter, i) => (
            <button key={i} style={{
              background: i === 0 ? 'var(--primary)' : 'transparent',
              color: i === 0 ? '#fff' : 'var(--text-secondary)',
              border: i === 0 ? 'none' : '1px solid var(--glass-border)',
              padding: '0.5rem 1rem',
              borderRadius: '99px',
              cursor: 'pointer'
            }}>
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {mockData.map((toilet, index) => (
          <ToiletCard key={toilet.id} data={toilet} index={index} />
        ))}
      </div>
    </section>
  );
}
