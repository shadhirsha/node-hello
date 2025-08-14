const http = require('http');
const port = process.env.PORT || 3000;
const stage = process.env.STAGE || 'development';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = `Hello Node shadhir CI/CD working EC2-SSH Dopper Auth added ${stage}\n`;
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
