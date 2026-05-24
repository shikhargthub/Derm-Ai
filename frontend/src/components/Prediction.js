import React, { useState, useRef } from "react";
import axios from "axios";

function Prediction() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasPredicted, setHasPredicted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (selected) => {
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
    setHasPredicted(false);
  };

  const handleChange = (e) => handleFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type.startsWith("image/")) handleFile(dropped);
  };

  const handlePredict = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(response.data);
      setHasPredicted(true);
    } catch (err) {
      console.log(err);
      alert("Prediction failed. Make sure the backend is running on port 5000.");
    }
    setLoading(false);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setHasPredicted(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section className="prediction-section" id="predict">
      <div className="prediction-header">
        <div className="section-badge">🔬 AI Analysis</div>
        <h2>Skin Disease Detection</h2>
        <p>Upload a clear photo of your skin for an instant AI-powered diagnosis</p>
      </div>

      <div className="prediction-grid">
        {/* Upload Card — hides drop zone after image is selected */}
        <div className={`upload-card ${preview ? "has-preview" : ""}`}>
          {/* Drop zone — hidden once image is selected */}
          {!preview && (
            <div
              className={`upload-zone ${dragOver ? "drag-active" : ""}`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <div className="upload-zone-icon">
                <svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {/* Cloud */}
                  <ellipse cx="32" cy="38" rx="22" ry="14" fill="#E8EDFF" />
                  <ellipse cx="22" cy="35" rx="12" ry="11" fill="#D8E2FF" />
                  <ellipse cx="42" cy="36" rx="11" ry="10" fill="#D8E2FF" />
                  <ellipse cx="32" cy="31" rx="14" ry="13" fill="#F0F4FF" />
                  {/* Up arrow */}
                  <path d="M32 42 L32 22" stroke="#6C47FF" strokeWidth="3" strokeLinecap="round" />
                  <path d="M24 29 L32 21 L40 29" stroke="#6C47FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <h3>Upload Skin Image</h3>
              <p>Drag & drop or click to browse</p>
              <span className="upload-hint">JPG, PNG, WEBP — Max 10MB</span>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            ref={fileInputRef}
            hidden
          />

          {/* Preview — shown after image selected */}
          {preview && (
            <div className="preview-container">
              <div className="preview-img-wrap">
                <img src={preview} alt="Uploaded skin" className="preview-image" />
                <div className="preview-overlay">
                  <button className="change-img-btn" onClick={() => fileInputRef.current?.click()}>
                    🔄 Change Image
                  </button>
                </div>
              </div>

              {!result && (
                <button
                  className={`predict-btn ${loading ? "loading" : ""}`}
                  onClick={handlePredict}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner" /> Analyzing…
                    </>
                  ) : (
                    "🧠 Analyze Image"
                  )}
                </button>
              )}

              {loading && (
                <div className="loading-bar-wrap">
                  <div className="loading-bar">
                    <div className="loading-bar-fill" />
                  </div>
                  <p className="loading-label">AI model processing…</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Result / Empty state */}
        {!result ? (
          <div className="empty-result">
            <div className="empty-illustration">
              <svg viewBox="0 0 120 120" width="90" height="90" fill="none" aria-hidden="true">
                <circle cx="60" cy="60" r="52" fill="#F0F2FF" />
                <circle cx="60" cy="60" r="36" fill="#E4E8FF" />
                {/* Magnifier */}
                <circle cx="54" cy="54" r="20" stroke="#6C47FF" strokeWidth="4" fill="none" />
                <path d="M68 68 L82 82" stroke="#6C47FF" strokeWidth="5" strokeLinecap="round" />
                {/* Skin lines */}
                <path d="M46 50 Q54 45 62 50" stroke="#9B8FEE" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M46 56 Q54 51 62 56" stroke="#9B8FEE" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M46 62 Q54 57 62 62" stroke="#9B8FEE" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <h3>Awaiting Analysis</h3>
            <p>Upload a skin image on the left to see AI-powered results here</p>
          </div>
        ) : (
          <div className="result-card result-animate">
            {/* Disease header */}
            <div className="result-header">
              <div>
                <div className="result-tag">Detected Condition</div>
                <h2 className="disease-name">{result.disease}</h2>
              </div>
              <div className="confidence-pill">
                {result.confidence}%
              </div>
            </div>

            {/* Confidence bar */}
            <div className="conf-bar-wrap">
              <div className="conf-bar-labels">
                <span>Confidence</span>
                <span>{result.confidence}%</span>
              </div>
              <div className="conf-bar-track">
                <div
                  className="conf-bar-fill"
                  style={{ "--target-width": `${result.confidence}%` }}
                />
              </div>
            </div>

            {/* Info grid */}
            <div className="result-info-grid">
              <div className="result-info-block result-info-full">
                <div className="info-label">📋 Description</div>
                <p>{result.description}</p>
              </div>
              <div className="result-info-block">
                <div className="info-label">💊 Treatment</div>
                <p>{result.treatment}</p>
              </div>
              <div className="result-info-block">
                <div className="info-label">🧪 Medicine</div>
                <p>{result.medicine}</p>
              </div>
            </div>

            <div className="warning-block">
              ⚠️ {result.warning} Please consult a licensed dermatologist.
            </div>

            <button className="upload-again-btn" onClick={handleReset}>
              📤 Upload Another Image
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Prediction;