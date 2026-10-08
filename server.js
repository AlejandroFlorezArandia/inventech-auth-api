const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar JSON en las peticiones
app.use(express.json());

// Ruta principal de bienvenida
app.get('/', (req, res) => {
  res.send('API REST SienaStore / InvenTech ejecutándose correctamente');
});

// Endpoint de Registro (GA7-220501096-AA5-EV01)
app.post('/api/auth/register', (req, res) => {
  const { nombre, apellido, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Email y contraseña son obligatorios.'
    });
  }

  return res.status(201).json({
    status: 'success',
    message: 'Registro de usuario realizado de manera satisfactoria.',
    data: { nombre, apellido, email }
  });
});

// Endpoint de Inicio de Sesión (GA7-220501096-AA5-EV01)
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'alejandro@ejemplo.com' && password === '123') {
    return res.status(200).json({
      status: 'success',
      message: 'Autenticación satisfactoria. Bienvenido al sistema.'
    });
  } else {
    return res.status(401).json({
      status: 'error',
      message: 'Error en la autenticación: Credenciales no válidas.'
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});