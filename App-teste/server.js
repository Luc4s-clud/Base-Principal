const express = require('express');
const app = express();
const PORT = 3001;


const routes = require('./routes/routes');


app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
