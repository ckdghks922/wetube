import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 4000;

const logger = morgan('dev');

const handleHome = (req, res) => {
  return res.end('<h1>Hello</h1>');
};
const handleLogin = (req, res) => {
  return res.send('Login Here');
};

app.use(logger);

app.get('/', handleHome);
app.get('/login', handleLogin);

app.listen(PORT, () => console.log(`Port on ${PORT}`));
