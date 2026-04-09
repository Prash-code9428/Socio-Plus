import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="row w-100 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start animate-fade-in">
          <h1 className="display-3 fw-bold text-primary mb-3" style={{ letterSpacing: '-2px' }}>Socio Plus</h1>
          <p className="lead text-muted mb-5">Connect with friends, share vibrant moments, and explore a dynamic world inside SocialeX.</p>
          <button onClick={() => navigate('/home')} className="btn-primary-custom btn-lg w-50 shadow-lg">Join Now</button>
        </div>
        <div className="col-lg-5 offset-lg-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel p-5">
            <h3 className="mb-4 text-center fw-bold">Welcome Back</h3>
            <form onSubmit={(e) => { e.preventDefault(); navigate('/home'); }}>
              <div className="mb-3">
                <label className="form-label text-muted small fw-bold">Email Address</label>
                <input type="email" className="form-control rounded-pill px-4 py-3 border-0 shadow-sm" required placeholder="you@example.com" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />
              </div>
              <div className="mb-4">
                <label className="form-label text-muted small fw-bold">Password</label>
                <input type="password" className="form-control rounded-pill px-4 py-3 border-0 shadow-sm" required placeholder="••••••••" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />
              </div>
              <button type="submit" className="btn btn-primary-custom w-100 mb-3 py-3 shadow">Login</button>
              <div className="text-center">
                <a href="#" className="small text-muted text-decoration-none hover-primary">Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
