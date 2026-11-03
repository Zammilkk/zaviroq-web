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
    const syncTheme = () => {
      const current =
        document.documentElement.getAttribute("data-theme") ||
        localStorage.getItem("theme") ||
        "light";
      setTheme(current);
    };

    syncTheme();
    window.addEventListener("themechange", syncTheme);
    window.addEventListener("storage", syncTheme);

    return () => {
      window.removeEventListener("themechange", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    window.dispatchEvent(new Event("themechange"));
  };

  if (!isClient) {
    return <div className={styles.themeTogglePlaceholder} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      className={styles.themeToggleContainer}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div
        className={`${styles.themeIconCircle} ${
          theme === "light" ? styles.themeIconActive : ""
        }`}
      >
        <Sun size={13} className={styles.themeIconSvg} />
      </div>
      <div
        className={`${styles.themeIconCircle} ${
          theme === "dark" ? styles.themeIconActive : ""
        }`}
      >
        <Moon size={13} className={styles.themeIconSvg} />
      </div>
    </button>
  );
}
