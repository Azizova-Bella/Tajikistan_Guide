"use client"

import { useState, useEffect } from "react"

export default function DarkModeSwitcher() {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize dark mode based on user preference or localStorage
  useEffect(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode !== null) {
      setDarkMode(savedMode === "true")
      if (savedMode === "true") {
        document.documentElement.classList.add("dark")
      }
    } else {
      // Check user preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      localStorage.setItem("darkMode", String(newMode))

      if (newMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      return newMode
    })
  }

  // Container styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  }

  // Label styles
  const labelStyle = {
    fontWeight: "bold",
    fontSize: "1.125rem",
  }

  // Button styles
  const buttonStyle = {
    position: "relative",
    width: "100px",
    height: "50px",
    backgroundColor: darkMode ? "#111827" : "white",
    borderRadius: "9999px",
    padding: "4px",
    border: darkMode ? "1px solid #374151" : "1px solid #d1d5db",
  }

  // Track styles
  const trackStyle = {
    position: "absolute",
    inset: "4px",
    backgroundColor: darkMode ? "#1f2937" : "#e5e7eb",
    borderRadius: "9999px",
  }

  // Slider styles
  const sliderStyle = {
    position: "absolute",
    top: "4px",
    bottom: "4px",
    width: "98px",
    left: "4px",
    transition: "all 300ms",
  }

  // Slider container styles
  const sliderContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  }

  // Sun icon container styles
  const sunIconContainerStyle = {
    position: "absolute",
    left: "4px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 300ms",
    backgroundColor: !darkMode ? "#2563eb" : darkMode ? "#374151" : "#d1d5db",
  }

  // Moon icon container styles
  const moonIconContainerStyle = {
    position: "absolute",
    right: "4px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    borderRadius: "9999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 300ms",
    backgroundColor: darkMode ? "#2563eb" : darkMode ? "#374151" : "#d1d5db",
  }

  // Sun icon styles
  const sunIconStyle = {
    width: "20px",
    height: "20px",
    color: !darkMode ? "white" : darkMode ? "#9ca3af" : "#6b7280",
  }

  // Moon icon styles
  const moonIconStyle = {
    width: "16px",
    height: "16px",
    color: darkMode ? "white" : darkMode ? "#9ca3af" : "#6b7280",
  }

  return (
    <div style={containerStyle}>
      <span style={labelStyle}>{darkMode ? "DARK" : "LIGHT"}</span>
      <button
        onClick={toggleDarkMode}
        style={buttonStyle}
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {/* Track */}
        <div style={trackStyle}></div>

        {/* Slider */}
        <div style={sliderStyle}>
          <div style={sliderContainerStyle}>
            {/* Sun Icon */}
            <div style={sunIconContainerStyle}>
              <SunIcon style={sunIconStyle} />
            </div>

            {/* Moon Icon */}
            <div style={moonIconContainerStyle}>
              <MoonIcon style={moonIconStyle} />
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

// Custom Sun Icon component
function SunIcon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  )
}

// Custom Moon Icon component
function MoonIcon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  )
}

