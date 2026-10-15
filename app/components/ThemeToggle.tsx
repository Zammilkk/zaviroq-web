"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "../[locale]/Navbar.module.css";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      if (prefersLight) {
        setTheme("light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) {
    return <div className={styles.themeTogglePlaceholder} style={{ width: 40, height: 40 }} />;
  }

  return (
    <div
      className={styles.themeToggleContainer}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background: theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        padding: '4px',
        gap: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '28px', height: '28px', borderRadius: '50%',
        background: theme === 'light' ? 'transparent' : '#7F77DD',
        color: theme === 'light' ? '#333' : '#fff',
        transition: 'all 0.3s ease'
      }}>
        <Sun size={14} />
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '28px', height: '28px', borderRadius: '50%',
        background: theme === 'light' ? '#7F77DD' : 'transparent',
        color: theme === 'light' ? '#fff' : 'rgba(255, 255, 255, 0.6)',
        transition: 'all 0.3s ease'
      }}>
        <Moon size={14} />
      </div>
    </div>
  );
}
