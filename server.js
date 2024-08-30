
import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors({
  // todo, figure out how to get local https
  // or dynamically create subdomains using tunnels
  origin: ['http://localhost:5173'],
}))

app.get('/api', (req, res) => {
  res.send({myles: '🗿'});
});

app.listen(port, () => {
  console.log(`Server is 🔥 at http://localhost:${port}`);
});

