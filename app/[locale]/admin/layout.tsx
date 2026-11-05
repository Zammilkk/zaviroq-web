"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { 
  ShieldCheck, LayoutDashboard, Users, Search, 
  Database, ExternalLink, LogOut, Lock, ArrowRight, ChevronRight, Rocket 
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('zaviroq_admin') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Zaviroq2026!') {
      sessionStorage.setItem('zaviroq_admin', 'true');
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid security credentials. Access denied.');
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
          <div className={styles.authBadge}>
            <ShieldCheck size={14} /> Security Protocol
          </div>
          <h2>Executive Access</h2>
          <p>Enter the master security passphrase to unlock the Zaviroq Production CMS and command infrastructure.</p>

          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup} style={{ marginBottom: '20px' }}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="password" 
                  placeholder="Enter Admin Passphrase" 
                  className={styles.textInput} 
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  required
                  autoFocus
                  style={{ paddingLeft: '44px' }}
                />
                <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              </div>
            </div>

            {errorMsg && (
              <div style={{ color: '#ef4444', fontSize: '0.82rem', marginBottom: '16px', textAlign: 'left' }}>
                {errorMsg}
              </div>
            )}

            <button type="submit" className={styles.btnPrimaryGlow} style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
              Authorize Access <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Extract locale prefix if present in pathname
  const localeMatch = pathname.match(/^\/(en|ar)(\/|$)/);
  const localePrefix = localeMatch ? `/${localeMatch[1]}` : '';

  const navItems = [
    { name: 'Command & CMS', path: `${localePrefix}/admin`, icon: LayoutDashboard },
    { name: 'Incoming Leads', path: `${localePrefix}/admin/leads`, icon: Users },
    { name: 'Global SEO Config', path: `${localePrefix}/admin/seo`, icon: Search },
    { name: 'Supabase Data', path: `${localePrefix}/admin/notes`, icon: Database },
  ];

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandLogoRow}>
            <div className={styles.brandLogoBadge}>Z</div>
            <h2>ZAVIROQ</h2>
          </div>
          <div className={styles.brandMeta}>
            <span className={styles.brandBadge}>CMS Console</span>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>v2.6 Enterprise</span>
          </div>
        </div>

        <div className={styles.dbStatusPill}>
          <span className={styles.statusDotPulse}></span>
          <span>Supabase Postgres Live</span>
        </div>

        <nav className={styles.navLinks}>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = pathname === item.path || (item.path.endsWith('/admin') && pathname === `${localePrefix}/admin`);
            return (
              <Link 
                key={item.name} 
                href={item.path} 
                className={`${styles.navItem} ${isActive ? styles.navActive : ''}`}
              >
                <div className={styles.navItemLeft}>
                  <span className={styles.iconWrap}><Icon size={18} /></span>
                  <span>{item.name}</span>
                </div>
                {isActive && <ChevronRight size={16} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.viewSiteBtn}
            title="Open Live Public Site in New Tab"
          >
            <Rocket size={15} color="#4f46e5" />
            <span>Live Website</span>
            <ExternalLink size={13} style={{ marginLeft: 'auto', color: '#94a3b8' }} />
          </a>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <LogOut size={14} />
            <span>Terminate Session</span>
          </button>
        </div>
      </aside>

      <main className={styles.contentArea}>
        {children}
      </main>
    </div>
  );
}
