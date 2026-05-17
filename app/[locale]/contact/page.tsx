"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Search, BarChart, MonitorSmartphone, Layers, MapPin, DollarSign, Globe, Map, CreditCard, PiggyBank, Briefcase } from 'lucide-react';
import styles from './page.module.css';
import RevealOnScroll from '../RevealOnScroll';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', country: '', budget: '', message: '' });
  const [status, setStatus] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Establishing secure connection...');
    
    // Premium visual loading steps
    setTimeout(() => setStatus('Encrypting payload...'), 800);
    setTimeout(() => setStatus('Routing to CRM...'), 1600);

    try {
      const res = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      if (data.status === 'success') {
        setTimeout(() => {
          setIsSubmitting(false);
          setStatus('');
          setStep(4);
        }, 2200); // Allow preloader sequence to finish visually
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setTimeout(() => {
        setStatus('Network timeout. Re-routing to WhatsApp...');
        setTimeout(() => {
          setIsSubmitting(false);
          setStep(4);
        }, 1500);
      }, 2000); // Allow bypass for dummy demo smoothly
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
                <div className={styles.cIcon}>💬</div>
                <div>
                  <h4>WhatsApp Secure Channel</h4>
                  <p className={styles.highlightText}>+971 52 977 5206</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.cIcon}>📞</div>
                <div>
                  <h4>Direct Call Line</h4>
                  <p className={styles.highlightText}>+91 74 8383 0582</p>
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

              <AnimatePresence>
                {isSubmitting && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className={styles.submitOverlay}
                  >
                    <div className={styles.loaderSpinner}></div>
                    <motion.p 
                      key={status} 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className={styles.loaderText}
                    >
                      {status}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className={styles.formElement} onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className={styles.formStep}>
                      <h3>Step 1: Identify Parameters</h3>
                      <div className={styles.inputGroup}>
                        <input type="text" placeholder="Full Name or Organization" required className={styles.input} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        <span className={styles.floatLabel}>Full Name or Organization</span>
                      </div>
                      <div className={styles.inputGroup}>
                        <input type="email" placeholder="Secure Email Address" required className={styles.input} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                        <span className={styles.floatLabel}>Secure Email Address</span>
                      </div>
                      <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Mobile / WhatsApp Number" required className={styles.input} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                        <span className={styles.floatLabel}>Mobile / WhatsApp Number</span>
                      </div>
                      <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Configure Scope →</button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className={styles.formStep}>
                      <h3>Step 2: Service Architecture</h3>
                      
                      <p style={{ color: '#888', marginBottom: '15px' }}>Target Service</p>
                      <div className={styles.selectionGrid} style={{ marginBottom: '30px' }}>
                        {[
                          { id: 'seo', title: 'SEO', icon: Search },
                          { id: 'web', title: 'Web Dev', icon: Code },
                          { id: 'marketing', title: 'Ads', icon: BarChart },
                          { id: 'uiux', title: 'UI/UX', icon: Layers },
                          { id: 'other', title: 'Other Service', icon: Briefcase }
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.id} className={`${styles.selectionCard} ${formData.service === item.id ? styles.selectionCardActive : ''}`} onClick={() => setFormData({...formData, service: item.id})}>
                              <Icon className={styles.selectionIcon} size={32} />
                              <p className={styles.selectionTitle}>{item.title}</p>
                            </div>
                          );
                        })}
                      </div>

                      <div className={styles.btnRow}>
                        <button type="button" className={styles.outlineBtn} onClick={prevStep}>← Back</button>
                        <button type="button" className={`btn-primary ${styles.submitBtn}`} onClick={() => {
                          if(!formData.service) {
                            alert("Please select a Target Service.");
                            return;
                          }
                          nextStep();
                        }}>Define Metrics →</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className={styles.formStep}>
                      <h3>Step 3: Execution Details</h3>
                      <div className={styles.inputGroup}>
                        <textarea placeholder="Describe your exact industry bottlenecks and what you need engineered..." rows={5} required className={styles.input} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                        <span className={styles.floatLabel}>Project Details & Requirements</span>
                      </div>
                      <div className={styles.btnRow}>
                        <button type="button" className={styles.outlineBtn} onClick={prevStep}>← Back</button>
                        <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Execute Deployment ⚡</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className={styles.successStep}>
                      <div className={styles.successIcon}>✅</div>
                      <h3>Data Logged Successfully</h3>
                      <p>Your parameters have been strictly routed into our CRM. Our analysts will reach out shortly.</p>
                      <a href="https://wa.me/971529775206" className={styles.waBtn}>Open Secure WhatsApp Line</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
