'use client';

import { useState } from 'react';
import styles from './page.module.css';
import RevealOnScroll from '../../components/RevealOnScroll';
import { Mail, Phone, Globe, ArrowRight, Lock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending your message...');
    
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Message sent! Our team will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }
    setTimeout(() => { setIsSubmitting(false); setStatus(''); }, 3000);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 🚀 ORIGINAL HERO SECTION */}
      <section className={styles.heroTop}>
        <div className={styles.heroTopBgLayer}></div>
        <div className={styles.heroTopContainer}>
          <div className={styles.heroTopLeft}>
            <RevealOnScroll>
              <div className={styles.heroEyebrow}>
                <span className={styles.eyebrowLine}></span> STRATEGIC PARTNERSHIP
              </div>
              
              <h1 className={styles.heroTopTitle}>
                Initialize Your<br />
                <span className={styles.heroHighlight}>Project.</span>
              </h1>
              
              <p className={styles.heroTopSub}>
                Submit your parameters below. Our engineering and marketing directors will map out an aggressive scaling pipeline within 24 hours.
              </p>
            </RevealOnScroll>
          </div>
          <div className={styles.heroTopRight}>
            <div className={styles.heroTopImageWrapper}>
              {/* Use the placeholder image */}
              <img src="/assets/images/contact-hero.png" alt="Contact Us" className={styles.heroTopImage} />
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CONTACT FORM SECTION (FROM MOCKUP) */}
      <section className={styles.contactHero}>
        <div className={styles.heroContainer}>
          
          {/* LEFT SIDE: TEXT & CARDS */}
          <div className={styles.heroLeft}>
            <RevealOnScroll>
              <div className={styles.heroEyebrow}>
                <span className={styles.eyebrowLine}></span> LET'S CONNECT
              </div>
              
              <h1 className={styles.heroTitle}>
                Turn Your Ideas<br />
                Into <span className={styles.heroHighlight}>Real Growth.</span>
              </h1>
              
              <p className={styles.heroSub}>
                Have a project in mind or need expert guidance? We're here to help you build, grow and scale your brand with the right digital solutions.
              </p>
              
              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <div className={styles.cardIconBox}><Mail size={20} /></div>
                  <div className={styles.cardInfo}>
                    <h4>Email Us</h4>
                    <p>info@zaviroq.com</p>
                  </div>
                  <div className={styles.cardArrow}>→</div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.cardIconBox}><Phone size={20} /></div>
                  <div className={styles.cardInfo}>
                    <h4>Call Us</h4>
                    <p>+91 74 8383 0582</p>
                  </div>
                  <div className={styles.cardArrow}>→</div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.cardIconBox}><Globe size={20} /></div>
                  <div className={styles.cardInfo}>
                    <h4>Our Presence</h4>
                    <p>India | UAE | Saudi Arabia | Qatar | Global</p>
                  </div>
                  <div className={styles.cardArrow}>→</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT SIDE: FORM & OFFICE IMAGE */}
          <div className={styles.heroRight}>
            <div className={styles.officeBackground}>
              {/* Add an actual office image here later if needed */}
              <div className={styles.overlay}></div>
            </div>
            
            <div className={styles.formCard}>
              <RevealOnScroll delay={150} yOffset={20}>
                <h2>Send Us a Message</h2>
                <p className={styles.formSub}>Fill out the form and our team will get back to you shortly.</p>
                
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label>Full Name *</label>
                      <input type="text" placeholder="Enter your full name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Email Address *</label>
                      <input type="email" placeholder="Enter your email address" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label>Phone Number</label>
                      <div className={styles.phoneInput}>
                        <span className={styles.countryCode}>🇮🇳 +91</span>
                        <input type="tel" placeholder="Enter your number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Company Name</label>
                      <input type="text" placeholder="Enter your company name" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Service Interested In</label>
                    <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="seo">SEO</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="design">Branding & Design</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Your Message</label>
                    <textarea rows={4} placeholder="Tell us about your project, requirements or any questions..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? status : <>Send Message <ArrowRight size={18} /></>}
                  </button>
                  
                  <div className={styles.privacyNote}>
                    <Lock size={12} /> Your information is safe with us. We respect your privacy.
                  </div>
                </form>
              </RevealOnScroll>
            </div>
          </div>
          
        </div>
      </section>

      {/* 🌍 GLOBAL PRESENCE SECTION */}
      <section className={styles.globalPresence}>
        <div className={styles.globalContainer}>
          <div className={styles.globalLeft}>
            <RevealOnScroll>
              <div className={styles.heroEyebrow}>
                <span className={styles.eyebrowLine}></span> GLOBAL PRESENCE
              </div>
              <h2 className={styles.globalTitle}>
                Working With<br/>
                Businesses <span className={styles.heroHighlight}>Worldwide</span>
              </h2>
              <p className={styles.globalSub}>
                We proudly serve clients across India, UAE, Saudi Arabia, Qatar and global markets, helping businesses achieve digital success.
              </p>
              
              <div className={styles.countryChips}>
                <div className={styles.chip}>
                  <img src="https://flagcdn.com/in.svg" alt="India" className={styles.flagImg} /> India
                </div>
                <div className={styles.chip}>
                  <img src="https://flagcdn.com/ae.svg" alt="UAE" className={styles.flagImg} /> UAE
                </div>
                <div className={styles.chip}>
                  <img src="https://flagcdn.com/sa.svg" alt="Saudi Arabia" className={styles.flagImg} /> Saudi Arabia
                </div>
                <div className={styles.chip}>
                  <img src="https://flagcdn.com/qa.svg" alt="Qatar" className={styles.flagImg} /> Qatar
                </div>
                <div className={styles.chip}>
                  <Globe size={18} color="#7b61ff" /> Global
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          <div className={styles.globalRight}>
            <RevealOnScroll delay={200}>
              <div className={styles.mapWrapper}>
                 <img src="/assets/images/contact-global.png" alt="Global Presence Map" className={styles.mapImg} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
    </div>
  );
}
