import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCamera, FaEdit } from 'react-icons/fa';

export default function ProfilePage() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 animate-fade-in">
          <Link to="/home" className="btn btn-light rounded-circle shadow-sm mb-4 d-inline-flex align-items-center justify-content-center" style={{ width: 45, height: 45, transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform='translateX(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform='translateX(0)'}>
             <FaArrowLeft className="text-muted fs-5" />
          </Link>
          
          <div className="glass-panel position-relative mb-5 shadow-lg border-0" style={{ minHeight: '220px', background: 'linear-gradient(135deg, #4F46E5, #10B981)' }}>
             {/* Cover photo edit btn */}
             <button className="btn btn-light btn-sm position-absolute rounded-pill shadow px-3 fw-bold" style={{ top: '20px', right: '20px' }}>
                <FaCamera className="me-2 text-primary" /> Edit Cover
             </button>

             {/* Profile Picture */}
             <div className="position-absolute text-center w-100" style={{ bottom: '-60px' }}>
                <div className="position-relative d-inline-block">
                    <img src="https://ui-avatars.com/api/?name=You&background=fff&color=4F46E5" alt="profile" className="rounded-circle border border-5 border-white bg-white shadow-lg" width="130" height="130" />
                    <button className="btn btn-primary rounded-circle position-absolute shadow-lg d-flex align-items-center justify-content-center" style={{ bottom: '5px', right: '5px', width: 35, height: 35, padding: 0, border: '2px solid white' }}>
                        <FaCamera size={14} />
                    </button>
                </div>
             </div>
          </div>

          <div className="glass-card p-5 mt-5 text-center">
             <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                 <h2 className="fw-bold mb-0">Current User</h2>
                 <button className="btn btn-link text-muted p-0"><FaEdit className="fs-5" /></button>
             </div>
             <p className="text-muted fw-medium mb-4">@current_user</p>
             
             <div className="row justify-content-center mb-5">
                 <div className="col-10 col-md-8 border rounded-4 p-4 shadow-sm" style={{backgroundColor: 'rgba(255,255,255,0.6)'}}>
                     <h6 className="fw-bold text-muted text-start mb-3 d-flex align-items-center gap-2"><FaEdit className="text-primary"/> About Me</h6>
                     <textarea className="form-control border-0 bg-transparent text-center px-0 fs-5 text-dark" rows="2" placeholder="Write something about yourself..." defaultValue="Loving the new Socio Plus vibe! 🚀" readOnly></textarea>
                 </div>
             </div>

             <div className="d-flex justify-content-center gap-5 border-top pt-5">
                 <div><h3 className="fw-bold mb-0 text-primary">24</h3><span className="text-muted fw-bold small text-uppercase letter-spacing-1">Posts</span></div>
                 <div><h3 className="fw-bold mb-0 text-primary">1.2k</h3><span className="text-muted fw-bold small text-uppercase letter-spacing-1">Followers</span></div>
                 <div><h3 className="fw-bold mb-0 text-primary">450</h3><span className="text-muted fw-bold small text-uppercase letter-spacing-1">Following</span></div>
             </div>
             
             <div className="mt-5">
                 <button className="btn btn-primary-custom btn-lg w-50 shadow">Save Profile Updates</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
