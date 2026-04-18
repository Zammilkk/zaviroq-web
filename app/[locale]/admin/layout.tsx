"use client";

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Dummy Auth persistence (client side for MVP)
  useEffect(() => {
    if (sessionStorage.getItem('zaviroq_admin') === 'true') {
      setTimeout(() => setIsAuthenticated(true), 0);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Hardcoded dummy password for demo
      sessionStorage.setItem('zaviroq_admin', 'true');
      setIsAuthenticated(true);
    } else {
      alert('Invalid Security Credentials');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('zaviroq_admin');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.authScreen}>
         <div className={styles.authCard}>
            <h2>Command Interface</h2>
            <form onSubmit={handleLogin}>
               <input 
                 type="password" 
                 placeholder="Enter Admin Passphrase (admin123)" 
                 className={styles.input} 
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 style={{marginBottom: '20px'}}
                 required
               />
               <button type="submit" className="btn-primary" style={{width: '100%', padding: '16px'}}>Authorize Access</button>
            </form>
         </div>
      </div>
    );
  }

  // NOTE: Assuming params is correctly handled by layout wrappers, but we extract simple strings safely
  const navItems = [
    { name: 'Dashboard Matrix', path: '/admin', icon: '📊' },
    { name: 'Incoming Leads CRM', path: '/admin/leads', icon: '👥' },
    { name: 'Global SEO Config', path: '/admin/seo', icon: '🔍' },
    { name: 'External Portals', path: '/', icon: '🌍' } // link back to public site
  ];

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <h2>ZAVIROQ</h2>
          <span>Admin Portal</span>
        </div>
        
        <nav className={styles.navLinks}>
           {/* Simple static linkage since we use standard anchors or React state navigation. 
               Using standard anchors for full React SSR refresh to guarantee latest SEO fetches internally. */}
           {navItems.map(item => (
              <a key={item.name} href={`/en${item.path}`} className={styles.navItem}>
                <span className={styles.icon}>{item.icon}</span>
                {item.name}
              </a>
           ))}
        </nav>

        <button className={styles.logoutBtn} onClick={handleLogout}>Terminate Session</button>
      </aside>

      <main className={styles.contentArea}>
        {children}
      </main>
    </div>
  );
}
