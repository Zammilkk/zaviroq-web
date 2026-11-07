"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { 
  ShieldCheck, LayoutDashboard, Users, Search, 
  Database, ExternalLink, LogOut, Lock, User, ArrowRight, 
  ChevronRight, Rocket, Eye, EyeOff, AlertCircle, ArrowLeft,
  Sparkles, Terminal, Activity, FileText
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminUser, setAdminUser] = useState('zaviroq');
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuth = sessionStorage.getItem('zaviroq_admin') === 'true';
      const storedUser = sessionStorage.getItem('zaviroq_admin_user');
      if (isAuth) {
        setIsAuthenticated(true);
        if (storedUser) setAdminUser(storedUser);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const cleanUser = username.trim().toLowerCase();
      // Required credentials: username "zaviroq", password "Zaviroq@2026</>"
      if (cleanUser === 'zaviroq' && password === 'Zaviroq@2026</>') {
        sessionStorage.setItem('zaviroq_admin', 'true');
        sessionStorage.setItem('zaviroq_admin_user', 'zaviroq');
        setAdminUser('zaviroq');
        setIsAuthenticated(true);
        setErrorMsg('');
      } else {
        setErrorMsg('Authentication failed: Invalid administrator credentials.');
      }
      setIsSubmitting(false);
    }, 300);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('zaviroq_admin');
    sessionStorage.removeItem('zaviroq_admin_user');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.authScreen}>
        {/* Futuristic Background Mesh */}
        <div className={styles.authGridMesh} />

        {/* Ambient Corner Telemetry */}
        <div className={styles.authCornerStatusLeft}>
          <Terminal size={13} color="#818cf8" />
          <span>Terminal // Cluster UAE &amp; US-East</span>
        </div>

        <div className={styles.authCornerStatusRight}>
          <span className={styles.authPulseDot} />
          <span>Core Gateway: Online</span>
        </div>

        {/* Cyber-Luxury Executive Authentication Card */}
        <div className={styles.authCard}>
          <div className={styles.authLogoWrap}>
            <span>Z</span>
          </div>

          <div className={styles.authBadge}>
            <ShieldCheck size={13} />
            <span>256-Bit Cipher Protocol</span>
          </div>

          <h2>Executive Command Suite</h2>
          <p>Dual-key identity verification required to unlock Zaviroq core infrastructure.</p>

          <form onSubmit={handleLogin} autoComplete="off">
            {/* Username Input */}
            <div className={styles.authFormGroup}>
              <label className={styles.authLabel} htmlFor="admin-username">
                Administrator Identifier
              </label>
              <div className={styles.authInputWrap}>
                <input 
                  id="admin-username"
                  type="text" 
                  placeholder="Enter administrator username" 
                  className={styles.authInput} 
                  value={username}
                  onChange={e => {
                    setUsername(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  required
                  autoFocus
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                />
                <User size={16} className={styles.authInputIcon} />
              </div>
            </div>

            {/* Password Input */}
            <div className={styles.authFormGroup}>
              <label className={styles.authLabel} htmlFor="admin-password">
                Master Security Passphrase
              </label>
              <div className={styles.authInputWrap}>
                <input 
                  id="admin-password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter executive passphrase" 
                  className={styles.authInput} 
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  required
                />
                <Lock size={16} className={styles.authInputIcon} />
                <button 
                  type="button" 
                  className={styles.authEyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className={styles.authErrorBox} role="alert">
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit Action */}
            <button 
              type="submit" 
              className={styles.authSubmitBtn} 
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'Verifying Credentials...' : 'Authorize Executive Session'}</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Secure Trust Footer (Zero Leaked Credentials) */}
          <div className={styles.authFooterMeta}>
            <div className={styles.authTrustRow}>
              <Lock size={12} color="#64748b" />
              <span>TLS 1.3 Certified • Zero-Trust Session Bound • ISO 27001</span>
            </div>
            <div>
              <Link href="/" className={styles.authBackLink}>
                <ArrowLeft size={13} />
                <span>Return to Public Experience</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Extract locale prefix if present in pathname
  const localeMatch = pathname.match(/^\/(en|ar)(\/|$)/);
  const localePrefix = localeMatch ? `/${localeMatch[1]}` : '';

  const navItems = [
    { name: 'Homepage CMS', path: `${localePrefix}/admin`, icon: LayoutDashboard },
    { name: 'All Pages Content', path: `${localePrefix}/admin/pages`, icon: FileText },
    { name: 'Per-Page SEO Engine', path: `${localePrefix}/admin/seo`, icon: Search },
    { name: 'Incoming Leads', path: `${localePrefix}/admin/leads`, icon: Users },
    { name: 'Supabase Data Matrix', path: `${localePrefix}/admin/notes`, icon: Database },
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
            <span className={styles.brandBadge}>Executive Core</span>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>v2.6 Enterprise</span>
          </div>
        </div>

        {/* Operator Profile Card */}
        <div className={styles.operatorProfileCard}>
          <div className={styles.operatorAvatar}>
            {adminUser.slice(0, 2).toUpperCase()}
          </div>
          <div className={styles.operatorInfo}>
            <span className={styles.operatorName}>
              {adminUser}
              <span className={styles.statusDotPulse} style={{ width: '6px', height: '6px' }} />
            </span>
            <span className={styles.operatorRole}>Executive SuperAdmin</span>
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
