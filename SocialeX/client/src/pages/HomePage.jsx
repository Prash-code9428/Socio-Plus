import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCompass, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import StoryBar from '../components/StoryBar';
import CreatePostModal from '../components/CreatePostModal';
import PostFeed from '../components/PostFeed';

export default function HomePage() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center mb-4">
        {/* Left Navigation */}
        <div className="col-lg-3 d-none d-lg-block animate-fade-in">
             <div className="glass-panel p-4 position-sticky" style={{ top: '2rem' }}>
                <h3 className="fw-bold mb-4 text-primary text-center" style={{ letterSpacing: '-1px' }}>Socio Plus</h3>
                <ul className="nav flex-column gap-2">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link text-dark shadow-sm bg-white rounded-pill px-4 py-3 d-flex align-items-center gap-3">
                        <FaHome className="text-primary fs-5" /> <span className="fw-medium">Home</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link text-muted px-4 py-3 d-flex align-items-center gap-3 rounded-pill transition-all" style={{ opacity: 0.8 }}>
                        <FaCompass className="fs-5" /> <span className="fw-medium">Explore</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link text-muted px-4 py-3 d-flex align-items-center gap-3 rounded-pill transition-all" style={{ opacity: 0.8 }}>
                        <FaBell className="fs-5" /> <span className="fw-medium">Notifications</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#" className="nav-link text-muted px-4 py-3 d-flex align-items-center gap-3 rounded-pill transition-all" style={{ opacity: 0.8 }}>
                        <FaEnvelope className="fs-5" /> <span className="fw-medium">Messages</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link text-muted px-4 py-3 d-flex align-items-center gap-3 rounded-pill transition-all" style={{ opacity: 0.8 }}>
                        <FaUser className="fs-5" /> <span className="fw-medium">Profile</span>
                      </Link>
                    </li>
                </ul>
             </div>
        </div>

        {/* Center Feed */}
        <div className="col-lg-6 col-md-10">
          <StoryBar />
          <CreatePostModal />
          <PostFeed />
        </div>

        {/* Right Sidebar Suggestions */}
        <div className="col-lg-3 d-none d-lg-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
             <div className="glass-panel p-4 position-sticky" style={{ top: '2rem' }}>
                <h6 className="fw-bold mb-4 text-muted">Suggested For You</h6>
                {[12, 33, 44].map((id, i) => (
                  <div key={i} className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center gap-2">
                          <img src={`https://i.pravatar.cc/150?img=${id}`} className="rounded-circle shadow-sm" width="45" height="45" alt="user" />
                          <div className="d-flex flex-column">
                              <span className="small fw-bold lh-1 mb-1">User_{id}</span>
                              <span className="text-muted lh-1" style={{fontSize: '0.75rem'}}>New to Socio</span>
                          </div>
                      </div>
                      <button className="btn btn-sm btn-light text-primary fw-bold px-3 rounded-pill shadow-sm">Follow</button>
                  </div>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
}
