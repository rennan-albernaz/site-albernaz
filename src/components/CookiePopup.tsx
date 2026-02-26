import React, { useEffect, useState } from "react";

const COOKIE_KEY = "cookieConsent";

const CookiePopup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handleConfig = () => {
    // Aqui você pode abrir um modal de configuração ou redirecionar para a política
    window.open("/politica-de-privacidade", "_blank");
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        bottom: 32,
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "rgba(36, 112, 52, 0.92)", // verde principal com opacidade
        backdropFilter: "blur(10px)",
        borderRadius: 20,
        boxShadow: "0 4px 32px rgba(36,112,52,0.18)",
        padding: "1.5rem 2.5rem",
        color: "#fff",
        maxWidth: 1300,
        minWidth: 320,
        width: "90%",
        minHeight: 90,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 28,
        fontSize: 16,
        textAlign: "left",
        border: "2px solid #2d8a40",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <strong style={{ fontSize: 22, marginBottom: 6, display: "block", color: "#fff" }}>
          Valorizamos sua privacidade.
        </strong>
        <span style={{ display: "block", marginBottom: 0, color: "#eafbe7" }}>
          Utilizamos cookies para melhorar sua experiência de navegação e analisar nosso tráfego de acordo com nossa{' '}
          <a
            href="/politica-de-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#b6ffcb", textDecoration: "underline", fontWeight: 500 }}
          >
            Política de Privacidade
          </a>.
          {' '}Ao continuar, você concorda com o uso dessas tecnologias.
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 170 }}>
        <button
          onClick={handleAccept}
          style={{
            background: "#fff",
            color: "#247034",
            border: "none",
            borderRadius: 8,
            padding: "10px 18px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 16,
            marginBottom: 4,
            boxShadow: "0 2px 8px rgba(36,112,52,0.10)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Aceitar Cookies
        </button>
        <button
          onClick={handleConfig}
          style={{
            background: "transparent",
            color: "#fff",
            border: "1.5px solid #fff",
            borderRadius: 8,
            padding: "10px 18px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 16,
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Configurar
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
