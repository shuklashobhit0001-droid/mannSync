import { useState } from 'react';
import './SignUpForm.css';

export default function SignUpForm({ onNavigateToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '', consent: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up attempt:', formData);
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
      </div>

      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <div className="input-wrapper">
          <svg className="input-icon" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="10" width="18" height="11" rx="2" stroke="#6E6E6E" strokeWidth="1.5"/>
            <path d="M7 10V7a5 5 0 0110 0v3" stroke="#6E6E6E" strokeWidth="1.5"/>
          </svg>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            className="form-input"
            placeholder="confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button
            type="button"
            className="show-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5C7 5 2.73 8.11 1 12.46c1.73 4.35 6 7.54 11 7.54s9.27-3.19 11-7.54C21.27 8.11 17 5 12 5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#6E6E6E"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="consent-group">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          className="consent-checkbox"
          checked={formData.consent}
          onChange={handleChange}
        />
        <label htmlFor="consent" className="consent-label">
          I confirm that I have read and agree to the <a href="#">Terms & Conditions</a>
        </label>
      </div>

      <button type="submit" className="login-btn">Sign In</button>

      <p className="signup-link">Already have an Account? <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToLogin(); }}>Login</a></p>
    </form>
  );
}
