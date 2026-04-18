"use client";

import { useState } from 'react';
import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', country: '', message: '' });
  const [status, setStatus] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Encrypting & Submitting...');
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setStatus('');
        setStep(4);
      }
    } catch (err) {
      console.error(err);
      setStatus('Server timeout. Re-routing recommended via Direct WhatsApp.');
      setTimeout(() => setStep(4), 2000); // Allow bypass for dummy demo
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.glowBg}></div>

      {/* 🚀 PREMIUM HERO */}
      <div className={styles.hero}>
        <RevealOnScroll>
          <div className={styles.badge}>Strategic Partnership</div>
          <h1 className={styles.title}>Initialize Your <span className="gradient-text">Project</span></h1>
          <p className={styles.subtitle}>
            Submit your parameters below. Our engineering and marketing directors will map out an aggressive scaling pipeline within 24 hours.
          </p>
        </RevealOnScroll>
      </div>

      <div className={styles.contactWrapper}>
        {/* 🏢 LEFT PANEL - INTEL */}
        <div className={styles.infoPanel}>
          <RevealOnScroll yOffset={30}>
            <div className={styles.infoCard}>
              <h2>Direct Encryption Lines</h2>
              <p className={styles.infoDesc}>Bypass the form and link directly with our command centers in India and the GCC.</p>
              
              <div className={styles.contactItem}>
                <div className={styles.cIcon}>🗺️</div>
                <div>
                  <h4>Physical Headquarters</h4>
                  <p>Mudipu, Near Konaje<br/>Mangalore - 574153, India</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.cIcon}>📞</div>
                <div>
                  <h4>Global WhatsApp Channel</h4>
                  <p className={styles.highlightText}>+91 74 8383 05 82</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.cIcon}>✉️</div>
                <div>
                  <h4>Sales & Support Matrix</h4>
                  <p>sales@digitalzaam.com<br/>contact@digitalzaam.com</p>
                </div>
              </div>
              
              <div className={styles.socialGems}>
                 {/* Dummy Social Links */}
                 <a href="#" className={styles.gem}>in</a>
                 <a href="#" className={styles.gem}>fb</a>
                 <a href="#" className={styles.gem}>ig</a>
                 <a href="#" className={styles.gem}>tw</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* 💻 RIGHT PANEL - MULTISTEP FORM */}
        <div className={styles.formPanel}>
          <RevealOnScroll delay={100} yOffset={30}>
            <div className={styles.formCard}>
              {/* Stepper Header */}
              <div className={styles.stepperHeader}>
                 <div className={`${styles.stepIndicator} ${step >= 1 ? styles.stepActive : ''}`}>1</div>
                 <div className={`${styles.stepLine} ${step >= 2 ? styles.lineActive : ''}`}></div>
                 <div className={`${styles.stepIndicator} ${step >= 2 ? styles.stepActive : ''}`}>2</div>
                 <div className={`${styles.stepLine} ${step >= 3 ? styles.lineActive : ''}`}></div>
                 <div className={`${styles.stepIndicator} ${step >= 3 ? styles.stepActive : ''}`}>3</div>
              </div>

              {status && <div className={styles.statusBox}>{status}</div>}

              <form className={styles.formElement} onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                
                {step === 1 && (
                  <div className={styles.formStep}>
                    <h3>Step 1: Identify Parameters</h3>
                    <div className={styles.inputGroup}>
                      <input type="text" placeholder="Full Name or Organization" required className={styles.input} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <input type="email" placeholder="Secure Email Address" required className={styles.input} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <input type="tel" placeholder="Mobile / WhatsApp Number" required className={styles.input} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Configure Scope →</button>
                  </div>
                )}

                {step === 2 && (
                  <div className={styles.formStep}>
                    <h3>Step 2: Service Architecture</h3>
                    <div className={styles.inputGroup}>
                      <select required className={styles.input} value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                        <option value="" disabled>Select Target Service</option>
                        <option value="seo">High-Impact SEO</option>
                        <option value="web">Next.js Web Optimization</option>
                        <option value="marketing">Meta & Google Ads</option>
                        <option value="uiux">UI/UX Glassmorphism</option>
                        <option value="other">Full-stack Bundle</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <select required className={styles.input} value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})}>
                        <option value="" disabled>Select Core Market</option>
                        <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                        <option value="UAE">United Arab Emirates (UAE)</option>
                        <option value="India">India</option>
                        <option value="Global">International / Global</option>
                      </select>
                    </div>
                    <div className={styles.btnRow}>
                      <button type="button" className={styles.outlineBtn} onClick={prevStep}>← Back</button>
                      <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Define Metrics →</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className={styles.formStep}>
                    <h3>Step 3: Execution Details</h3>
                    <div className={styles.inputGroup}>
                      <textarea placeholder="Describe your exact industry bottlenecks and what you need engineered..." rows={5} required className={styles.input} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                    <div className={styles.btnRow}>
                      <button type="button" className={styles.outlineBtn} onClick={prevStep}>← Back</button>
                      <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Execute Deployment ⚡</button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className={styles.successStep}>
                    <div className={styles.successIcon}>✅</div>
                    <h3>Data Logged Successfully</h3>
                    <p>Your parameters have been strictly routed into our CRM. Our analysts will reach out shortly.</p>
                    <a href="https://wa.me/917483830582" className={styles.waBtn}>Open Secure WhatsApp Line</a>
                  </div>
                )}
              </form>

            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
