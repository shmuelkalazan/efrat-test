const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/stores', async(req, res) => {
  try {
    const response = await axios.get('https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json');
    res.json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({ error: 'Internal Server Error' });

  }});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
