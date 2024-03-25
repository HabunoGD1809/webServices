import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para estáticos IMPORTANTe :D
app.use(express.static(path.join(__dirname, '..')));

app.use(express.json());

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/contactos', async (req, res) => {
   try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      const data = await response.json();
      res.json(data);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la lista de contactos' });
   }
});

app.post('/contactos', async (req, res) => {
   try {
      const { nombre, apellido, telefono } = req.body;
      if (!nombre || !apellido || !telefono) {
         return res.status(400).json({ error: 'Faltan campos obligatorios' });
      }

      const response = await fetch('http://www.raydelto.org/agenda.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ nombre, apellido, telefono })
      });

      const data = await response.json();
      res.json(data);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al agregar el contacto' });
   }
});

app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`);
});
