import { useState } from 'react';
import './LoginPage.css';
import Logo from './Logo';
import LoginForm from './LoginForm';
import Footer from './Footer';

export default function LoginPage({ onNavigateToSignUp, onLogin }) {
  return (
    <div className="login-page">
      <div className="login-content">
        <Logo />
        <div className="welcome-section">
          <h1 className="welcome-title">Welcome Back</h1>
          <p className="welcome-subtitle">Login to access your mann!</p>
        </div>
        <LoginForm onNavigateToSignUp={onNavigateToSignUp} onLogin={onLogin} />
      </div>
      <Footer />
    </div>
  );
}
