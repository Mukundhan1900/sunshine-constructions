export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-info">

          <h3>Sunshine Construction</h3>

          <p>
            📧{" "}
            <a href="mailto:sunshineconstructionsteam@gmail.com">
              sunshineconstructionsteam@gmail.com
            </a>
          </p>

          <p>
            📍 No.9, Kumaran Nagar, Keelkatalai, Chennai - 600117,
            Tamil Nadu
          </p>

          <p>
            📞{" "}
            <a href="tel:+918903311111">
              +91 89033 11111
            </a>
          </p>

        </div>

        <div className="footer-map">

          <iframe
            title="Sunshine Construction Location"
            src="https://www.google.com/maps?q=No.9,Kumaran+Nagar,Keelkatalai,Chennai,600117&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Sunshine Construction. All Rights Reserved.
      </div>

    </footer>
  );
}