"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "../[locale]/Navbar.module.css";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) {
    return <div className={styles.themeTogglePlaceholder} />;
  }

  return (
    <button
      type="button"
      className={styles.themeToggleContainer}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={`${styles.themeIconCircle} ${theme === 'light' ? styles.themeIconActive : ''}`}>
        <Sun size={13} className={styles.themeIconSvg} />
      </div>
      <div className={`${styles.themeIconCircle} ${theme === 'dark' ? styles.themeIconActive : ''}`}>
        <Moon size={13} className={styles.themeIconSvg} />
      </div>
    </button>
  );
}
