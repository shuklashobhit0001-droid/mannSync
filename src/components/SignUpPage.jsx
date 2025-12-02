import { useState } from 'react';
import './SignUpPage.css';
import Logo from './Logo';
import SignUpForm from './SignUpForm';
import Footer from './Footer';

export default function SignUpPage({ onNavigateToLogin }) {
  return (
    <div className="login-page">
      <div className="login-content">
        <Logo />
        <div className="welcome-section">
          <h1 className="welcome-title">Create your Account!</h1>
          <p className="welcome-subtitle">Access your mann!</p>
        </div>
        <SignUpForm onNavigateToLogin={onNavigateToLogin} />
      </div>
      <Footer />
    </div>
  );
}
