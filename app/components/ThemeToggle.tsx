"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "../[locale]/Navbar.module.css";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!isClient) {
    return <div className={styles.themeTogglePlaceholder} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      className={styles.themeToggleContainer}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
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
