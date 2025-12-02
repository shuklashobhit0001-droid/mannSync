import { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import DashboardPage from './components/DashboardPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <>
      {currentPage === 'login' ? (
        <LoginPage onNavigateToSignUp={() => setCurrentPage('signup')} onLogin={() => setCurrentPage('dashboard')} />
      ) : currentPage === 'signup' ? (
        <SignUpPage onNavigateToLogin={() => setCurrentPage('login')} />
      ) : (
        <DashboardPage onLogout={() => setCurrentPage('login')} />
      )}
    </>
  );
}

export default App;
