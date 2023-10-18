const cors = require('cors');  // Importe o pacote cors
const express = require('express');

const app = express();
const PORT = 3001;

const routes = require('./routes/routes');

app.use(cors());  // Use o middleware cors
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
