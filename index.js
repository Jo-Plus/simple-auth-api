const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Simple Auth API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});