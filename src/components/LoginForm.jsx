import { useState } from 'react';
import './LoginForm.css';

export default function LoginForm({ onNavigateToSignUp, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Username</label>
        <div className="input-wrapper">
          <svg className="input-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#6E6E6E"/>
          </svg>
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="enter email address or phone no."
            value={formData.username}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <div className="input-wrapper">
          <svg className="input-icon" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="10" width="18" height="11" rx="2" stroke="#6E6E6E" strokeWidth="1.5"/>
            <path d="M7 10V7a5 5 0 0110 0v3" stroke="#6E6E6E" strokeWidth="1.5"/>
          </svg>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            className="form-input"
            placeholder="enter password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5C7 5 2.73 8.11 1 12.46c1.73 4.35 6 7.54 11 7.54s9.27-3.19 11-7.54C21.27 8.11 17 5 12 5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#6E6E6E"/>
            </svg>
          </button>
        </div>
        <a href="#" className="forgot-password">Forgot Your Password?</a>
      </div>

      <button type="submit" className="login-btn">Log In</button>

      <div className="divider">
        <span>Or Login With</span>
      </div>

      <button type="button" className="google-btn">
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Google Account
      </button>

      <p className="signup-link">Don't Have An Account? <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToSignUp(); }}>Sign in</a></p>
    </form>
  );
}
