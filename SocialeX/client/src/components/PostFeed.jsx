import React from 'react';
import { FaHeart, FaComment, FaShare, FaEllipsisH } from 'react-icons/fa';

const mockPosts = [
  { id: 1, user: 'Jane Smith', time: '2 hours ago', content: 'Just finished setting up my new React workspace!', likes: 12, comments: 4, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' },
  { id: 2, user: 'Alex', time: '5 hours ago', content: 'Loving the beautiful glassmorphism trends recently. Clean and modern!', likes: 45, comments: 8, image: null },
  { id: 3, user: 'Emma', time: '1 day ago', content: 'Coffee and code ☕️', likes: 120, comments: 14, image: 'https://images.unsplash.com/photo-1499596816401-447e8dc837a7?auto=format&fit=crop&w=600&q=80' }
];

export default function PostFeed() {
  return (
    <div className="d-flex flex-column gap-4">
      {mockPosts.map((post, i) => (
        <div key={post.id} className="glass-card p-4 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="d-flex align-items-center mb-3">
            <img src={`https://ui-avatars.com/api/?name=${post.user}&background=random`} alt={post.user} className="rounded-circle me-3" width="45" height="45" />
            <div>
              <h6 className="mb-0 fw-bold">{post.user}</h6>
              <small className="text-muted">{post.time}</small>
            </div>
            <button className="btn btn-sm btn-light ms-auto rounded-circle d-flex align-items-center justify-content-center text-muted" style={{width: 32, height: 32}}>
                <FaEllipsisH />
            </button>
          </div>
          <p className="mb-3">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="post content" className="img-fluid rounded mb-3 w-100" style={{ objectFit: 'cover', maxHeight: '450px' }} />
          )}
          <hr className="text-muted opacity-25" />
          <div className="d-flex justify-content-around">
            <button className="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2"><FaHeart className="text-danger" /> {post.likes}</button>
            <button className="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2"><FaComment /> {post.comments}</button>
            <button className="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2"><FaShare /> Share</button>
          </div>
        </div>
      ))}
    </div>
  );
}
