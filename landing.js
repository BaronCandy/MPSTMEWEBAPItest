const express = require('express');
const bodyParser = require('body-parser');
const inventoryRouter = require('./src/routes/inventory');
const invoiceRouter=require('./src/routes/invoice');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use the inventory routes
app.use('/api/inventory', inventoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
