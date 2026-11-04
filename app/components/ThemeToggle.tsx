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

  const setThemeMode = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    window.dispatchEvent(new Event("themechange"));
  };

  const toggleTheme = () => {
    setThemeMode(theme === "dark" ? "light" : "dark");
  };

  if (!isClient) {
    return <div className={styles.themeTogglePlaceholder} aria-hidden="true" />;
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={styles.themeToggleContainer}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div
        className={`${styles.themeIconCircle} ${
          theme === "light" ? styles.themeIconActive : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setThemeMode("light");
        }}
        title="Light Mode"
      >
        <Sun size={13} className={styles.themeIconSvg} />
      </div>
      <div
        className={`${styles.themeIconCircle} ${
          theme === "dark" ? styles.themeIconActive : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setThemeMode("dark");
        }}
        title="Dark Mode"
      >
        <Moon size={13} className={styles.themeIconSvg} />
      </div>
    </div>
  );
}
