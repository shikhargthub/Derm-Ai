function Navbar({ dark, setDark }) {
  return (
    <nav className="navbar">
      <h2 className="logo">DermAI</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#predict">Predict</a>
        <a href="#knowledge">Knowledge</a>
        <a href="#tips">Tips</a>
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark/light theme"
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;