import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Menu, NotebookText, Youtube, FileText, HelpCircle, Eraser, Download } from "lucide-react";
import emailjs from "emailjs-com";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [notes, setNotes] = useState("");
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [helpMessage, setHelpMessage] = useState("");

  const navItems = [
    { icon: <NotebookText className="nav-icon" />, text: "Draw", onClick: () => handleSectionClick("draw") },
    { icon: <Youtube className="nav-icon" />, text: "YouTube", onClick: () => window.open("https://www.youtube.com", "_blank") },
    { icon: <FileText className="nav-icon" />, text: "Notes", onClick: () => handleSectionClick("notes") },
    { icon: <HelpCircle className="nav-icon" />, text: "Help", onClick: () => setShowHelpPopup(true) },
  ];

  function handleSectionClick(section) {
    setActiveSection(section);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (activeSection === "draw" && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 300;
      canvas.height = 400;
      const ctx = canvas.getContext("2d");
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";
      ctxRef.current = ctx;
    }
  }, [activeSection]);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const downloadNotes = () => {
    const element = document.createElement("a");
    const file = new Blob([notes], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "notes.txt";
    document.body.appendChild(element);
    element.click();
  };

  const sendHelpRequest = (e) => {
    e.preventDefault();
    emailjs
      .send("service_ru0gfim", "template_g89bnel", {
        from_name: "User",
        message: helpMessage,
      }, "Sn7lu72SQZFPFJs6-")
      .then(() => {
        alert("Help request sent successfully!");
        setShowHelpPopup(false);
        setHelpMessage("");
      })
      .catch((err) => console.error("Failed to send help request:", err));
  };

  return (
    <nav className="navbar">
      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu size={32} color="#fff" />
      </div>

      {/* Navbar Items */}
      {isMenuOpen && (
        <ul className="navbar-list">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`navbar-item ${activeSection === item.text.toLowerCase() ? "active" : ""}`}
              onClick={item.onClick}
            >
              {item.icon}
              <span className="navbar-text">{item.text}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Draw Section */}
      {activeSection === "draw" && (
        <div className="draw-section">
          <canvas
            ref={canvasRef}
            className="drawing-canvas"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          ></canvas>
          <button className="clear-btn" onClick={clearCanvas}>
            <Eraser /> Clear
          </button>
        </div>
      )}

      {/* Notes Section */}
      {activeSection === "notes" && (
        <div className="notes-section">
          <textarea
            className="notes-textarea"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your notes here..."
          ></textarea>
          <button className="download-btn" onClick={downloadNotes}>
            <Download /> Download Notes
          </button>
        </div>
      )}

      {/* Help Popup */}
      {showHelpPopup && (
        <div className="help-popup">
        <div className="help-popup-content">
          <textarea
            className="help-textarea"
            value={helpMessage}
            onChange={(e) => setHelpMessage(e.target.value)}
            placeholder="Describe your problem..."
            style={{
              width: "80%",
              margin:"2px",
              height: "55px",
              padding: "11px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              resize: "none",
            }}
          ></textarea>
          <button className="send-help-btn" style={{ marginRight: "12px" }} onClick={sendHelpRequest}>
            Send Request
          </button>
          <button className="close-help-btn" onClick={() => setShowHelpPopup(false)}>
            Close
          </button>
        </div>
      </div>
      
      )}
    </nav>
  );
};

export default Navbar;
