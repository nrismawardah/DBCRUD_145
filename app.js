const express = require('express');
const todoRoutes = require('./tododb'); // Import router dari tododb.js
const app = express();
const port = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan router untuk endpoint todos
app.use('/todos', todoRoutes);

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
