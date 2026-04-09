require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files from vite build
app.use(express.static(path.join(__dirname, '../aldeitas-react/dist')));

// Serve assets folder (if still needed outside dist)
app.use('/assets', express.static(path.join(__dirname, '../aldeitas-react/public/assets')));

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { nombre, empresa, email, telefono, mensaje, tipo } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Nombre, email y mensaje son obligatorios.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Aldeitas Food Web" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Nueva consulta desde la web: ${tipo === 'empresa' ? 'Viandas corporativas' : 'Congelados'}`,
      html: `
        <h2>Nueva consulta desde aldeitas food.com.ar</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;">Nombre:</td><td>${nombre}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Empresa:</td><td>${empresa || '-'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email:</td><td>${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Teléfono:</td><td>${telefono || '-'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Tipo:</td><td>${tipo === 'empresa' ? 'Viandas corporativas' : 'Congelados / Distribución'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Mensaje:</td><td>${mensaje}</td></tr>
        </table>
      `,
    });

    res.json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (err) {
    console.error('Error enviando email:', err.message);
    // En MVP, igual respondemos OK para no bloquear al usuario
    res.json({ success: true, message: 'Mensaje recibido.' });
  }
});

// SPA fallback — serve index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../aldeitas-react/dist/index.html'));
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Aldeitas Food server running at http://localhost:${PORT}`);
});
