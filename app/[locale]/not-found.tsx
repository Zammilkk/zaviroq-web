'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const locale = useLocale();

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      background: 'transparent'
    }}>
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, var(--primary-blue) 0%, transparent 70%)',
        opacity: '0.1',
        filter: 'blur(40px)',
        zIndex: -1
      }} />
      
      <h1 className="gradient-text" style={{ fontSize: '8rem', fontWeight: '900', margin: '0', opacity: '0.2' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginTop: '-40px', marginBottom: '20px', color: 'var(--text-main)' }}>
        {locale === 'ar' ? 'الصفحة غير موجودة' : 'Module Not Found'}
      </h2>
      <p style={{ maxWidth: '500px', color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.1rem' }}>
        {locale === 'ar' 
          ? 'المسار الذي تحاول الوصول إليه غير موجود في بنية النظام لدينا. يرجى التحقق من الرابط أو العودة للرئيسية.' 
          : 'The architecture you are looking for does not exist in our current deployment. It might have been moved or deprecated.'}
      </p>
      
      <Link 
        href={`/${locale}`} 
        className="btn-primary"
        style={{ padding: '12px 30px', textDecoration: 'none', borderRadius: '8px' }}
      >
        {locale === 'ar' ? 'العودة للرئيسية' : 'Back to Control Center'}
      </Link>
    </div>
  );
}
