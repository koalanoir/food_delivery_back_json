const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Définir le routeur JSON Server
const router = jsonServer.router(path.join(__dirname, 'src/main/storage/bd.json'));

app.use(cors());
// Utiliser le middleware JSON Server
app.use('/api', router);



// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports=app