import React from 'react';
import { FaImage, FaVideo, FaSmile } from 'react-icons/fa';

export default function CreatePostModal() {
  return (
    <div className="glass-card p-4 mb-4 animate-fade-in">
      <div className="d-flex gap-3 mb-3">
        <img src="https://ui-avatars.com/api/?name=You&background=4F46E5&color=fff" alt="current" className="rounded-circle" width="48" height="48" />
        <input 
          type="text" 
          className="form-control rounded-pill border-0 shadow-sm px-4" 
          placeholder="What's on your mind?" 
          style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
        />
      </div>
      <hr className="text-muted opacity-25 my-3" />
      <div className="d-flex justify-content-between align-items-center px-2">
        <div className="d-flex gap-2 gap-md-4">
          <button className="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2 px-0"><FaImage className="text-success fs-5" /> <span className="d-none d-sm-inline">Photo</span></button>
          <button className="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2 px-0"><FaVideo className="text-danger fs-5" /> <span className="d-none d-sm-inline">Video</span></button>
          <button className="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2 px-0"><FaSmile className="text-warning fs-5" /> <span className="d-none d-sm-inline">Feeling</span></button>
        </div>
        <button className="btn btn-primary-custom btn-sm px-4">Post</button>
      </div>
    </div>
  );
}
