function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 className="footer-logo">DermAI</h2>
          <p className="footer-tagline">AI Powered Dermatology Assistant</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#predict">Predict</a>
          <a href="#knowledge">Knowledge</a>
          <a href="#tips">Tips</a>
        </div>

        <div className="footer-disclaimer">
          <span>⚕️</span>
          <p>
            This tool is for <strong>educational purposes only</strong> and does not
            replace professional medical advice. Always consult a licensed dermatologist.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DermAI · Built with React & Flask · Powered by Deep Learning</p>
      </div>
    </footer>
  );
}

export default Footer;