// server.js
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// -------------- Configuración inicial --------------
dotenv.config();
const app = express();

// Para poder usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -------------- Middleware --------------
app.use(cors());                  // Permite conexiones desde cualquier origen
app.use(express.json());          // Para recibir JSON en POST
app.use(express.static(path.join(__dirname, '../frontend'))); // Carpeta frontend

// -------------- Conexión a MySQL --------------
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("❌ Error al conectar con MySQL:", err);
  } else {
    console.log("✅ Conectado a MySQL (levitador_magnetico)");
  }
});

// -------------- Rutas --------------

// Ruta raíz → Servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// API: obtener todos los resultados
app.get("/api/resultados", (req, res) => {
  const sql = "SELECT * FROM resultados ORDER BY fecha;";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(data);
  });
});

// API: agregar nuevo resultado
app.post("/api/resultados", (req, res) => {
  const { fecha, posicion_mm, estabilidad } = req.body;
  const sql = "INSERT INTO resultados (fecha, posicion_mm, estabilidad) VALUES (?, ?, ?)";
  db.query(sql, [fecha, posicion_mm, estabilidad], (err) => {
    if (err) return res.status(500).json({ error: err });
    return res.json({ message: "Registro agregado correctamente" });
  });
});

// API: filtrar resultados por fecha
app.get("/api/resultados/:fecha", (req, res) => {
  const { fecha } = req.params;
  const sql = "SELECT * FROM resultados WHERE DATE(fecha) = ?;";
  db.query(sql, [fecha], (err, data) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(data);
  });
});

// -------------- Servidor --------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
